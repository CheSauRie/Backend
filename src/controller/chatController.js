const { Pinecone } = require("@pinecone-database/pinecone");
const { OpenAIEmbeddings } = require("langchain/embeddings/openai");
const { ChatOpenAI } = require("langchain/chat_models/openai")
const { PromptTemplate } = require("langchain/prompts")
const { StringOutputParser } = require("langchain/schema/output_parser")
const { RunnablePassthrough, RunnableSequence } = require("langchain/schema/runnable");
const { createStuffDocumentsChain } = require("langchain/chains/combine_documents");
const { Chat, Message } = require('../models');
const { PineconeStore } = require("@langchain/pinecone");
const { convert } = require('html-to-text');
const axios = require('axios');
const puppeteer = require('puppeteer');
require('dotenv').config()


const openAIApiKey = process.env.OPENAI_API_KEY

const llm = new ChatOpenAI({ openAIApiKey, modelName: "gpt-4-1106-preview" })
/**
 * Các hàm dùng cho CRD các bảng Chat, Message
 */
// Lấy danh sách đoạn chat từ người dùng
const getChat = async (req, res) => {
    try {
        const { id } = req.user; // decoded token lấy được user_id
        const chats = await Chat.findAll({
            where: { user_id: id }
        });
        if (chats.length > 0) {
            res.status(200).json(chats);
        } else {
            res.status(404).json({ message: 'No chats found for this user.' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Thêm đoạn chat input: user_id, question được xử lý về standalone_question, ouput lưu vào csdl
const createChat = async (req, res) => {
    try {
        const { id } = req.user; // decoded token lấy được user_id
        const { question } = req.body;
        /**
         * Thêm code chỗ này đưa question về dạng summary
         */
        const response = await summaryQuestion(question)
        const summary = response.content;
        const newChat = await Chat.create({ user_id: id, summary: summary });
        res.status(201).json(newChat);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// xóa đoạn chat: input:user_id, chat_id
const deleteChat = async (req, res) => {
    try {
        const { id } = req.user; // decoded token lấy được user_id
        const { chat_id } = req.query;

        await Chat.destroy({
            where: {
                chat_id: chat_id,
                user_id: id
            },
        });
        await Message.destroy({
            where: {
                chat_id: chat_id,
            },
        });
        res.status(200).send("xóa thành công");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//Lấy cuộc trò chuyện tương ứng: input chat_id, có thể thêm user_id để đảm bảo an toàn, lấy toàn bộ đoạn chat
const getDetailMessage = async (req, res) => {
    try {
        const { chat_id } = req.query;
        const messages = await Message.findAll({
            where: { chat_id: chat_id },
        });
        if (messages.length > 0) {
            res.status(200).json(messages);
        } else {
            res.status(404).json({ message: 'No chats found for this user.' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//Lấy lịch sử đoạn chat cho vào prompt, lấy 5 đoạn gần nhất không phải controller
const getMessageHistory = async (chat_id) => {
    try {
        const messages = await Message.findAll({
            where: { chat_id: chat_id },
            order: [['createdAt', 'DESC']],
            limit: 5
        });
        if (messages.length > 0) {
            return messages;
        } else {
            console.log("No chats found for this user.");
        }
        return messages;
    } catch (error) {
        console.log(error);
    }
}

//Tạo message: đầu vào là question => tạo answer => lưu answer trong csdl
const createMessage = async (req, res) => {
    const { chat_id, question } = req.body;
    try {
        // Lấy lịch sử trò chuyện
        const messages = await getMessageHistory(chat_id);
        // Đưa về standalone Quesion
        const response = await summaryQuestion(question);
        // lấy kết quả
        const summary = response.content;
        // Format lịch sử cuộc trò chuyện
        const convHistory = messages.map(msg => {
            return `Human: ${msg.question}
                    AI: ${msg.answer}`
        })
        // Tìm kiếm thông tin từ Google để sử dụng làm phần của câu trả lời, đưa vào câu trả lời
        const googleSearchResults = await googleSearch(question, 2);

        // Tạo Answer từ hàm response AI, kết hợp với kết quả tìm kiếm Google
        const aiResponse = await responseAI(question, convHistory, googleSearchResults);
        // Tạo Answer
        const answer = `${aiResponse}\n\n[Nguồn tham khảo:] \n${googleSearchResults}`;

        const newMessage = await Message.create({ chat_id: chat_id, question: question, answer: answer, summary: summary, url_references: googleSearchResults });
        res.status(201).json(newMessage);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

function extractUrlsFromText(text) {
    // Điều chỉnh biểu thức chính quy để nó khớp với cả 'http' và 'https'
    const urlRegex = /http[s]?:\/\/[^\s]+/g;
    const urls = [];

    // Tách chuỗi dựa trên dấu xuống dòng và lặp qua từng dòng
    const lines = text.split('\n');
    for (const line of lines) {
        // Sử dụng biểu thức chính quy để tìm URL trong dòng
        const matches = line.match(urlRegex);
        if (matches) {
            // Thêm URL tìm được vào mảng kết quả
            urls.push(...matches);
        }
    }

    return urls;
}

// async function extractTextFromUrls(urls) {
//     const texts = [];
//     for (const url of urls) {
//         try {
//             const response = await axios.get(url);
//             let text = convert(response.data);
//             text.replace(/\r\n/g, '\n')
//                 .replace(/\n+/g, '\n')
//                 .replace(/\n.*\nXem thêm\s*:/gi, '')
//                 .replace(/^.*>>.*$\n?/gim, '')
//                 .replace(/http[s]?:\/\/[^\s]+/g, '')
//                 .replace(/[\u263a-\u27bf]/g, '')
//                 .replace(/<\/?[^>]+(>|$)/g, "")
//                 .replace(/\s*\[[^\]]*\]/g, '')
//                 .trim()
//                 .replace(/\s+/g, ' ')
//             console.log(text);
//             texts.push(text);
//         } catch (error) {
//             console.error(`Lỗi khi trích xuất từ URL ${url}:`, error);
//             texts.push("");
//         }
//     }
//     return texts;
// }

async function extractTextFromUrls(urls) {
    const browser = await puppeteer.launch({
        args: [
            "--disable-setuid-sandbox",
            "--no-sandbox",
            "--single-process",
            "--no-zygote"
        ],
        headless: true,
        executablePath: process.env.NODE_ENV === "production"
            ? process.env.PUPPETEER_EXECUTABLE_PATH
            : puppeteer.executablePath(),

    });
    const texts = [];

    for (const url of urls) {
        const page = (await browser.pages())[0];
        try {
            await page.goto(url); // Đợi cho đến khi không còn mạng nào nữa
            let extractedText = await page.$eval('*', (el) => {
                const selection = window.getSelection();
                const range = document.createRange();
                range.selectNode(el);
                selection.removeAllRanges();
                selection.addRange(range);
                return window.getSelection().toString();
            });
            extractedText = extractedText.replace(/\r\n/g, '\n').replace(/\n+/g, '\n').trim()
            console.log(extractedText);
            texts.push(extractedText);
        } catch (error) {
            console.error(`Lỗi khi trích xuất từ URL`, error);
            texts.push("");
        } finally {
            // await page.close();
        }
    }

    await browser.close();
    return texts;
}

//Tạo bộ truy xuất
const createRetrieval = async () => {

    const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });

    const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX);
    const vectorStore = await PineconeStore.fromExistingIndex(
        new OpenAIEmbeddings({ openAIApiKey: process.env.OPENAI_API_KEY, stripNewLines: false }),
        { pineconeIndex }
    );

    const retriever = vectorStore.asRetriever({ k: 3 });
    return retriever
}
//Kết hợp tài liệu
const combineDocuments = (docs) => {
    console.log(docs);
    return docs.map((doc) => doc.pageContent.replace(/\s+/g, ' ').trim()).join('\n\n')
}

//Tạo phản hồi AI
const responseAI = async (question, convHistory, googleSearchUrls) => {
    try {
        const retriever = await createRetrieval()
        const standaloneQuestionTemplate = `Given some conversation history (if any) and a question.
        conversation history: {conv_history}
        question: {question} 
        standalone question:
    `
        const answerTemplate = `As a highly knowledgeable and experienced college admissions counselor, your goal is to provide guidance and support to high school students navigating the college admissions process. You will answer their questions, address their concerns, and offer expert advice tailored to their specific needs and circumstances. To receive questions or concerns from high school students, they will provide them in Vietnamese. You are to reply with detailed and informative answers based on context provided and the conversation history in Vietnamese without processing the original question or concern.
        Try to find the answer in the context. If the answer is not given in the context, use google search results, all of your training or conversation history to come up with an answer.
        It's more important to be accurate than complete. If you can't give a reliable answer and the question or concern is not related to your field, please say 'I don't know.'
        Translate the answer to Vietnamese
        Additionally, suggest 3 related questions that could further help the student understand the topic or explore related areas. These questions should encourage deeper thinking or inquiry about the subject matter. Mark the start of these questions with "Related Questions:" and each question should be numbered (1, 2, 3).
        [Related Questions:]
        1. 
        2. 
        3. 
        Google Search: {google_search}
        Context: {context}
        Conversation history: {conv_history}
        Question: {question}
        answer:
        Remember: If an answer cannot be provided, not only should you state "I don't know" or "Tôi không biết," but you should also programmatically signal this scenario by setting a flag = 1
    `
        const answerPrompt = PromptTemplate.fromTemplate(answerTemplate)
        const standaloneQuestionPrompt = PromptTemplate.fromTemplate(standaloneQuestionTemplate)
        const standaloneQuestionChain = standaloneQuestionPrompt.pipe(llm).pipe(new StringOutputParser)
        const answerChain = answerPrompt.pipe(llm).pipe(new StringOutputParser)
        const retrieverChain = RunnableSequence.from([
            prevResult => prevResult.standalone_question,
            retriever,
            combineDocuments
        ])

        const chain = RunnableSequence.from([
            {
                standalone_question: standaloneQuestionChain,
                original_input: new RunnablePassthrough()
            },
            {
                context: retrieverChain,
                question: ({ original_input }) => original_input.question,
                conv_history: ({ original_input }) => original_input.conv_history,
                google_search: ({ original_input }) => original_input.google_search,
            },
            answerChain
        ])
        const googleSearch = await resposeSearch(question, googleSearchUrls)

        const response = await chain.invoke({
            question: question,
            conv_history: convHistory,
            google_search: googleSearch
        })

        return response;
    } catch (error) {
        console.log(error);
    }
}

//SearchRespose
const resposeSearch = async (question, googleSearchUrls) => {
    try {
        // Google search
        let gooleSearchResults;
        const scrapUrls = extractUrlsFromText(googleSearchUrls);
        try {
            const textExtracted = await extractTextFromUrls(scrapUrls);
            gooleSearchResults = textExtracted;
        } catch (error) {
            console.log(`Lỗi khi trích xuất từ URL ${url}:`, error);
            return;
        }
        const searchTemplate = `Answer the following question based only on the provided context:
                        <context>
                        {context}
                        </context>
                        Question: {input}
                        `

        const searchPromt = PromptTemplate.fromTemplate(searchTemplate)
        const searchChain = searchPromt.pipe(llm)

        const responseWithSearch = await searchChain.invoke({
            input: question,
            context: gooleSearchResults
        });
        return responseWithSearch;
    } catch (error) {
        console.log(error);
    }
}
//Đưa câu hỏi về dạng standalone
const summaryQuestion = async (question) => {
    try {
        // A string holding the phrasing of the prompt
        const standaloneQuestionTemplate = `Given a question, convert the question to a standalone question, only give the standalone question in Vietnamese, 
        do not repeat the standalone question
        question: {question} 
        `
        // A prompt created using PromptTemplate and the fromTemplate method
        const standaloneQuestionPrompt = PromptTemplate.fromTemplate(standaloneQuestionTemplate)

        //Take the standaloneQuestionPrompt and PIPE the model
        const standaloneQuestionChain = standaloneQuestionPrompt.pipe(llm)

        // Await the response when you invoke the chain
        const response = await standaloneQuestionChain.invoke({
            question: question
        })

        return response;
    } catch (error) {
        console.log(error);
    }
}
// Hàm sử dụng google search
async function googleSearch(query, numResult) {
    const apiKey = process.env.API_KEY_GOOGLE_SEARCH;
    const cseId = process.env.CSEID;
    const numResults = numResult; // Số lượng kết quả bạn muốn trả về
    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cseId}&q=${encodeURIComponent(query)}&num=${numResults}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.items && data.items.length > 0) {
            // Trả về tiêu đề và liên kết của kết quả đầu tiên
            return data.items.slice(0, numResults).map((item, index) => `${index + 1}. ${item.title}: ${item.link}`).join('\n');
        } else {
            return 'Không tìm thấy kết quả.';
        }
    } catch (error) {
        console.error('Lỗi khi tìm kiếm Google:', error);
        return 'Có lỗi xảy ra khi tìm kiếm.';
    }
}


module.exports = {
    responseAI,
    getChat,
    createChat,
    deleteChat,
    getDetailMessage,
    createMessage,
    summaryQuestion
}

