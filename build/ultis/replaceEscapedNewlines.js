"use strict";

function replaceEscapedNewlines(value) {
  // Kiểm tra nếu giá trị là chuỗi và có chứa "\\n"
  if (typeof value === 'string') {
    return value.replace(/\\n/g, '\n').replace(/\\r/g, '\r');
  }
  return value;
}
module.exports = {
  replaceEscapedNewlines: replaceEscapedNewlines
};