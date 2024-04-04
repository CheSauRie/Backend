# FROM node:18-alpine

# Set up puppeteer dependencies
FROM ghcr.io/puppeteer/puppeteer:19.11.1

ENV PUPPETEER_SKIP_CHRONIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

WORKDIR /usr/src/app

COPY package*.json ./
RUN ls -la /usr/src/app/package-lock.json

RUN npm install

RUN npm install -g @babel/core @babel/cli @babel/register

COPY . .

RUN npm run build

CMD ["npm","run","start"]
