const { convert } = require("html-to-text");
const axios = require('axios');

// (async () => {
//     const response = await axios.get("https://www.techtarget.com/whatis/definition/Pathways-Language-Model-PaLM");
//     if (!response) {
//         console.log("Không thể lấy dữ liệu");
//         return;
//     }

//     const options = {
//         wordwrap: null,
//         selectors: [
//             { selector: 'footer', format: 'skip' }, // Loại bỏ thẻ footer
//             { selector: 'i', format: 'skip' }, // Loại bỏ thẻ i, thường được sử dụng cho icon
//         ]
//     };

//     let text = convert(response.data, options);
//     text = text.replace(/\r\n/g, '\n')
//         .replace(/\n+/g, '\n')
//         .replace(/\s+/g, ' ')
//         .replace(/\n.*\nXem thêm\s*:/gi, '')
//         .replace(/^.*>>.*$\n?/gim, '')
//         .replace(/http[s]?:\/\/[^\s]+/g, '')
//         .replace(/[\u263a-\u27bf]/g, '')
//         .replace(/<\/?[^>]+(>|$)/g, "")
//         .replace(/\s*\[[^\]]*\]/g, '')
//         .trim()
//     console.log(text);
// })();


const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: true
    });
    const page = (await browser.pages())[0];
    await page.goto('https://tuyensinh.uet.vnu.edu.vn/tin-tuyen-sinh/thong-tin-tuyen-sinh-dai-hoc-nam-2024-du-kien/');
    let extractedText = await page.$eval('*', (el) => {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNode(el);
        selection.removeAllRanges();
        selection.addRange(range);
        return window.getSelection().toString();
    });

    extractedText = extractedText.replace(/\r\n/g, '\n').replace(/\n+/g, '\n').trim()
    console.log(extractedText);

    await browser.close();
})();