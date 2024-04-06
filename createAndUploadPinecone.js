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

    const loader = new DirectoryLoader("./documents", {
        ".txt": (path) => new TextLoader(path),
        ".pdf": (path) => new PDFLoader(path),
    });
    const docs = await loader.load();

    const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });

    const pineconeIndex = pinecone.Index("kltn");

    // const docs = [
    //     new Document({
    //         metadata: { foo: "bar" },
    //         pageContent: "pinecone is a vector db",
    //     }),
    //     new Document({
    //         metadata: { foo: "bar" },
    //         pageContent: "the quick brown fox jumped over the lazy dog",
    //     }),
    //     new Document({
    //         metadata: { baz: "qux" },
    //         pageContent: "lorem ipsum dolor sit amet",
    //     }),
    //     new Document({
    //         metadata: { baz: "qux" },
    //         pageContent: "pinecones are the woody fruiting body and of a pine tree",
    //     }),
    // ];
    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 700,
        chunkOverlap: 90,
        separators: ['\n\n', '\n', ' ', ''] //có thể là dấu ##
    });
    const text = await fs.readFile('E:\\KLTN-Backend-deploy\\Backend\\documents\\data_cleaned.txt', 'utf8');
    const output = await splitter.createDocuments([text])

    await PineconeStore.fromDocuments(output, new OpenAIEmbeddings({ openAIApiKey: process.env.OPENAI_API_KEY }), {
        pineconeIndex,
        maxConcurrency: 5, // Maximum number of batch requests to allow at once. Each batch is 1000 vectors.
    });

    // const vectorStore = await PineconeStore.fromExistingIndex(
    //     new OpenAIEmbeddings({ openAIApiKey: process.env.OPENAI_API_KEY }),
    //     { pineconeIndex }
    // );

    /* Search the vector DB independently with metadata filters */
    // const results = await vectorStore.similaritySearch("đại học quốc gia hồ chí minh", 4);
})();