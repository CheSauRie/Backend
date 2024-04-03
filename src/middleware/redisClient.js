require('dotenv').config(); // Đảm bảo dòng này ở đầu file
const redis = require('redis');

// Sử dụng biến môi trường
const client = redis.createClient({
    url: process.env.REDIS_URL // Sử dụng biến môi trường
});

client.on('error', (err) => console.log('Redis Client Error', err));
client.connect();

module.exports = client;
