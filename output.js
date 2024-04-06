const fs = require('fs');

// Hàm xử lý file: thay thế \r\n bằng \n hoặc loại bỏ \r\n
const processFile = (inputFilePath, outputFilePath, removeNewlines = false) => {
    fs.readFile(inputFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Could not read file:", err);
            return;
        }

        // Xử lý dữ liệu: thay thế hoặc loại bỏ \r\n
        let processedData;
        if (removeNewlines) {
            // Loại bỏ hoàn toàn
            processedData = data.replace(/\r\n/g, '');
        } else {
            // Thay thế \r\n bằng \n
            processedData = data.replace(/\r\n/g, '\n');
        }

        // Ghi dữ liệu đã xử lý vào file mới
        fs.writeFile(outputFilePath, processedData, 'utf8', (err) => {
            if (err) {
                console.error("Could not write to file:", err);
                return;
            }
            console.log(`File has been processed and saved to '${outputFilePath}'.`);
        });
    });
};

// Sử dụng hàm
const inputFilePath = 'E:\\KLTN-Backend-deploy\\Backend\\data.txt'; // Thay thế 'path/to/your/input.txt' bằng đường dẫn file của bạn
const outputFilePath = 'E:\\KLTN-Backend-deploy\\Backend\\data_cleaned.txt'; // Thay thế 'path/to/your/output.txt' bằng đường dẫn bạn muốn lưu file kết quả

// Gọi hàm với `removeNewlines = false` để thay thế \r\n bằng \n
processFile(inputFilePath, outputFilePath, true);

// Hoặc gọi hàm với `removeNewlines = true` để loại bỏ hoàn toàn các dấu xuống dòng
// processFile(inputFilePath, outputFilePath, true);
