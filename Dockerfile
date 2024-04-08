# Bắt đầu từ hình ảnh Node.js
FROM node:18-alpine

# Cài đặt các phụ thuộc cần thiết cho Puppeteer
RUN apk add --no-cache \
    chromium \
    nss \
    freetype \
    freetype-dev \
    harfbuzz \
    ca-certificates \
    ttf-freefont

# Thiết lập biến môi trường cho Puppeteer
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

WORKDIR /usr/src/app

# Sao chép package.json và package-lock.json
COPY package*.json ./

# Tạo người dùng không phải root để tránh chạy làm root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
RUN chown -R appuser:appgroup /usr/src/app
USER appuser

# Cài đặt các phụ thuộc từ package.json
RUN npm install

# RUN npm install -g @babel/core @babel/cli @babel/register
# Sao chép phần còn lại của mã nguồn ứng dụng
COPY . .

# Biên dịch ứng dụng, nếu cần
RUN npm run build

# Chạy ứng dụng
CMD ["npm", "run", "start"]