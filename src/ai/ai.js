function extractUrlsFromText(text) {
    // Điều chỉnh biểu thức chính quy để nó khớp với cả 'http' và 'https'
    const urlRegex = /http[s]?:\/\/[^\s]+/g;
    const urls = [];

    // Tách chuỗi dựa trên dấu xuống dòng và lặp qua từng dòng
    const lines = text.split('\n');
    for (const line of lines) {
        // Sử dụng biểu thức chính quy để tìm URL trong dòng
        const matches = line.match(urlRegex);
        if (matches) {
            // Thêm URL tìm được vào mảng kết quả
            urls.push(...matches);
        }
    }

    return urls;
}

async function extractTextFromUrls(urls) {
    const texts = [];
    for (const url of urls) {
        try {
            const response = await axios.get(url);
            const text = convert(response.data);
            texts.push(text);
        } catch (error) {
            console.error(`Lỗi khi trích xuất từ URL ${url}:`, error);
            texts.push("");
        }
    }
    return texts;
}