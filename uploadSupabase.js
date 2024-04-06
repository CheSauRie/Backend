const { createClient } = require("@supabase/supabase-js");
const { SupabaseVectorStore } = require("@langchain/community/vectorstores/supabase");
const { OpenAIEmbeddings } = require("langchain/embeddings/openai");
const { RecursiveCharacterTextSplitter } = require("langchain/text_splitter")
require('dotenv').config()
const fs = require('fs/promises');
const uploadSupabase = async () => {
    try {

        const text = await fs.readFile('E:\\KLTN-Backend-deploy\\Backend\\data.txt', 'utf8');

        const splitter = new RecursiveCharacterTextSplitter({
            chunkSize: 500,
            chunkOverlap: 50,
            separators: ['\n\n', '\n', ' ', ''] //có thể là dấu ##
        });

        const output = await splitter.createDocuments([text]);

        const sbApiKey = process.env.SUPABASE_API_KEY
        const sbUrl = process.env.SUPABASE_URL_LC_CHATBOT
        const openAIApiKey = process.env.OPENAI_API_KEY

        const client = createClient(sbUrl, sbApiKey)

        await SupabaseVectorStore.fromDocuments(
            output,
            new OpenAIEmbeddings({
                openAIApiKey
            }),
            {
                client,
                tableName: 'documents',
            }
        )
    } catch (error) {
        console.log(error);
    }
};

uploadSupabase()