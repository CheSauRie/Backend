FROM node:18-alpine

FROM ghcr.io/puppeteer/puppeteer:19.11.1

ENV PUPPETEER_SKIP_CHRONIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

WORKDIR /kltn/backend

COPY package*.json ./

RUN npm install

RUN npm install -g @babel/core @babel/cli @babel/register

COPY . .

RUN npm run build

CMD ["npm","run","start"]

#docker build --tag node-docker .
#docker run -p 2000:2000 -d node-docker