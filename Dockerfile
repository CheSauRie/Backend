FROM ghcr.io/puppeteer/puppeteer:19.7.2

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

WORKDIR /usr/src/app

# Sao chép package.json và package-lock.json
COPY package*.json ./

# Tạo người dùng không phải root để tránh chạy làm root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
RUN chown -R appuser:appgroup /usr/src/app
USER appuser

# Cài đặt các phụ thuộc từ package.json
RUN npm install --force

# RUN npm install -g @babel/core @babel/cli @babel/register
# Sao chép phần còn lại của mã nguồn ứng dụng
COPY . .

# Biên dịch ứng dụng, nếu cần
RUN npm run build

# Chạy ứng dụng
CMD ["npm", "run", "start"]
