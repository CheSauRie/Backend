const { PineconeClient, Pinecone } = require("@pinecone-database/pinecone");
const { DirectoryLoader } = require("langchain/document_loaders/fs/directory");
const { TextLoader } = require("langchain/document_loaders/fs/text");
const { PDFLoader } = require("langchain/document_loaders/fs/pdf");
const { OpenAIEmbeddings } = require("langchain/embeddings/openai");
const { RecursiveCharacterTextSplitter } = require("langchain/text_splitter");
const { Document } = require("@langchain/core/documents");
const { PineconeStore } = require("@langchain/pinecone");
require('dotenv').config()
const fs = require('fs/promises');

const createPineconeIndex = async (client, indexName, vectorDimension) => {
    const createClient = await client.createIndex({
        name: indexName,
        dimension: vectorDimension,
        spec: {
            metric: "cosine",
            // Include other necessary specifications here according to the API documentation.
        },
    });
    await new Promise((resolve) => setTimeout(resolve, 60000));
};

const updatePinecone = async (client, indexName, docs) => {
    const index = client.Index("hiih");
    for (const doc of docs) {
        const txtPath = doc.metadata.source;
        const text = doc.pageContent;
        // 6. Create RecursiveCharacterTextSplitter instance
        const textSplitter = new RecursiveCharacterTextSplitter({
            chunkSize: 1000,
        });
        // 7. Split text into chunks (documents)
        const chunks = await textSplitter.createDocuments([text]);
        const embeddingsArrays = await new OpenAIEmbeddings({ openAIApiKey: process.env.OPENAI_API_KEY }).embedDocuments(
            chunks.map((chunk) => chunk.pageContent.replace(/\n/g, " "))
        );
        const batchSize = 100;
        let batch = [];
        for (let idx = 0; idx < chunks.length; idx++) {
            const chunk = chunks[idx];
            const vector = {
                id: `${txtPath}_${idx}`,
                values: embeddingsArrays[idx],
                metadata: {
                    ...chunk.metadata,
                    loc: JSON.stringify(chunk.metadata.loc),
                    pageContent: chunk.pageContent,
                    txtPath: txtPath,
                },
            };
            batch.push(vector);
            // When batch is full or it's the last item, upsert the vectors
            if (batch.length === batchSize || idx === chunks.length - 1) {
                await index.upsert({
                    upsertRequest: {
                        vectors: batch,
                    },
                });
                // Empty the batch
                batch = [];
            }
        }
    }
};

// 10. Run the main async function
(async () => {

    const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });

    const pineconeIndex = pinecone.Index("kltn");

    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 3000,
        chunkOverlap: 600,
        // separators: ['\n\n', '\n', ' ', '', "========"]
    });

    const text = await fs.readFile('E:\\KLTN-Backend-deploy\\Backend\\document\\data_cleaned.txt', 'utf8');
    const output = await splitter.createDocuments([text])

    await PineconeStore.fromDocuments(output, new OpenAIEmbeddings({ openAIApiKey: process.env.OPENAI_API_KEY, stripNewLines: false }), {
        pineconeIndex,
        maxConcurrency: 5, // Maximum number of batch requests to allow at once. Each batch is 1000 vectors.
    });

    // const vectorStore = await PineconeStore.fromExistingIndex(
    //     new OpenAIEmbeddings({ openAIApiKey: process.env.OPENAI_API_KEY }),
    //     { pineconeIndex }
    // );

})();

// function splitTextIntoChunks(text, maxSize) {
//     const chunks = [];
//     for (let start = 0; start < text.length; start += maxSize) {
//         const end = Math.min(start + maxSize, text.length);
//         chunks.push(text.substring(start, end));
//     }
//     return chunks;
// }
// (async () => {
//     const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
//     const pineconeIndex = pinecone.Index("kltn");

//     const directoryPath = "./documents";
//     let files = await fs.readdir(directoryPath);

//     files = files.filter(file => path.extname(file) === '.txt').sort((a, b) => {
//         return parseInt(a, 10) - parseInt(b, 10);
//     });

//     for (const file of files) {
//         try {
//             const filePath = path.join(directoryPath, file);
//             console.log(`Processing file: ${file}`);

//             const content = await fs.readFile(filePath, 'utf8');
//             const lines = content.split('\n');
//             const chunkSize = parseInt(lines.shift(), 10);
//             const text = lines.join('\n');

//             // Chia nhỏ văn bản thành các chunks nếu cần
//             const chunks = (chunkSize > 8192) ? splitTextIntoChunks(text, 8192) : [text];

//             for (const chunk of chunks) {
//                 const documents = await new RecursiveCharacterTextSplitter({
//                     chunkSize: chunk.length, // Sử dụng độ dài của mỗi chunk như là chunkSize
//                     separators: ['\n\n', '\n', ' ', '']
//                 }).createDocuments([chunk]);

//                 // Thực hiện embedding và upload cho mỗi chunk
//                 await PineconeStore.fromDocuments(documents, new OpenAIEmbeddings({ openAIApiKey: process.env.OPENAI_API_KEY, modelName: "text-embedding-ada-002", stripNewLines: false }), {
//                     pineconeIndex,
//                     maxConcurrency: 5,
//                 });
//             }
//         } catch (error) {
//             console.error(`Error processing file: ${file}. Error: ${error.message}`);
//         }
//     }
// })();