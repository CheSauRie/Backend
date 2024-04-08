const fs = require('fs');
const path = require('path');


const inputFilePath = 'E:\\KLTN-Backend-deploy\\Backend\\data.txt';
const outputFilePath = 'E:\\KLTN-Backend-deploy\\Backend\\data_cleaned.txt';
const outputFileCalculate = 'E:\\KLTN-Backend-deploy\\Backend\\block_lengths.txt';
const outputDirectory = 'E:\\KLTN-Backend-deploy\\Backend\\documents';

const processFile = (inputFilePath, outputFilePath) => {
    fs.readFile(inputFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Could not read file:", err);
            return;
        }

        let processedData = data;
        processedData = processedData.replace(/(.*\n)(\d{2}\/\d{2}\/\d{4} \d{2}:\d{2} [ap]m)/g, '========\n$1$2');
        processedData = processedData.replace(/\r\n/g, '\n');
        processedData = processedData.replace(/\n+/g, '\n');
        processedData = processedData.replace(/\n.*\nXem thêm\s*:/gi, '');
        processedData = processedData.replace(/^.*>>.*$\n?/gim, '');
        processedData = processedData.replace(/<[^>]+>/g, '');
        processedData = processedData.trim();


        fs.writeFile(outputFilePath, processedData, 'utf8', (err) => {
            if (err) {
                console.error("Could not write to file:", err);
                return;
            }
            console.log(`File has been processed and saved to '${outputFilePath}'.`);
        });
    });
};
// processFile(inputFilePath, outputFilePath);


const calculateBlockLengths = (inputFilePath, outputFilePath) => {
    fs.readFile(inputFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Could not read file:", err);
            return;
        }

        // Tách dữ liệu thành các khối dựa vào "========"
        const blocks = data.split("========\n").filter(block => block.trim() !== '');

        // Tính độ dài của mỗi khối và lưu vào một mảng
        const blockLengths = blocks.map(block => block.length);

        // Tính trung bình độ dài của các khối
        const averageLength = blockLengths.reduce((acc, length) => acc + length, 0) / blockLengths.length;

        // Tìm khối lớn nhất và nhỏ nhất
        const maxLength = Math.max(...blockLengths);
        const minLength = Math.min(...blockLengths);

        // Chuẩn bị nội dung để lưu vào file
        const contentToSave = `Độ dài của mỗi khối: ${blockLengths.join(', ')}\n` +
            `Trung bình độ dài của các khối: ${averageLength}\n` +
            `Khối lớn nhất: ${maxLength} ký tự\n` +
            `Khối nhỏ nhất: ${minLength} ký tự`;

        // Lưu kết quả vào file
        fs.writeFile(outputFilePath, contentToSave, 'utf8', (err) => {
            if (err) {
                console.error("Could not write to file:", err);
                return;
            }
            console.log(`Kết quả đã được lưu vào file '${outputFilePath}'.`);
        });
    });
};
// Gọi hàm để tính toán
calculateBlockLengths(inputFilePath, outputFileCalculate);


const saveBlocksToFiles = (inputFilePath, outputDirectory) => {
    fs.readFile(inputFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Could not read file:", err);
            return;
        }

        // Tạo thư mục output nếu nó không tồn tại
        if (!fs.existsSync(outputDirectory)) {
            fs.mkdirSync(outputDirectory, { recursive: true });
        }

        // Tách dữ liệu thành các khối dựa vào "========"
        const blocks = data.split("========\n").filter(block => block.trim() !== '');

        // Lưu mỗi khối vào một file riêng
        blocks.forEach((block, index) => {
            // Tính độ dài của khối
            const blockLength = block.length;
            // Chuẩn bị nội dung để lưu vào file
            const contentToSave = `${blockLength}\n${block}`;
            // Xác định tên file dựa trên thứ tự của khối
            const fileName = path.join(outputDirectory, `${index + 1}.txt`);

            // Lưu khối vào file
            fs.writeFile(fileName, contentToSave, 'utf8', (err) => {
                if (err) {
                    console.error(`Could not write to file ${fileName}:`, err);
                    return;
                }
                console.log(`Khối ${index + 1} đã được lưu vào file '${fileName}'.`);
            });
        });
    });
};


// Gọi hàm để tách và lưu các khối
saveBlocksToFiles(inputFilePath, outputDirectory);