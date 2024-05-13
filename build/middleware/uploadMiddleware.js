"use strict";

// File: middleware/uploadMiddleware.js
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, 'uploads/images'); // Đảm bảo thư mục 'uploads' đã được tạo trong dự án của bạn
  },
  filename: function filename(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
var upload = multer({
  storage: storage
});
module.exports = {
  upload: upload
};