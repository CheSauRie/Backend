require('dotenv').config(); // Đảm bảo dòng này ở đầu file
const { createClient } = require('redis');

const client = createClient({
    password: '9ulgOuDzsueFBV6GwZcODEJEEAJjLsr3',
    socket: {
        host: 'redis-13848.c16.us-east-1-2.ec2.redns.redis-cloud.com',
        port: 13848
    }
});

module.exports = client;