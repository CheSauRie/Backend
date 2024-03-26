function replaceEscapedNewlines(value) {
    // Kiểm tra nếu giá trị là chuỗi và có chứa "\\n"
    if (typeof value === 'string' && value.includes('\\n')) {
        return value.replace(/\\n/g, '\n');
    }
    return value;
}

module.exports = {
    replaceEscapedNewlines
}