# FROM node:18-alpine

# Set up puppeteer dependencies
FROM ghcr.io/puppeteer/puppeteer:19.11.1

ENV PUPPETEER_SKIP_CHRONIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

WORKDIR /usr/src/app

# Tạo một người dùng không phải root và chuyển quyền sở hữu
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
COPY package*.json ./
RUN chown -R appuser:appgroup /usr/src/app

USER appuser

RUN npm install

RUN npm install -g @babel/core @babel/cli @babel/register

COPY . .

RUN npm run build

CMD ["npm","run","start"]
