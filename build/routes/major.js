"use strict";

// Trong file route (ví dụ: authRoutes.js)
var express = require('express');
var majorRouter = express.Router();
var _require = require("../controller/majorController"),
  createMajor = _require.createMajor,
  getMajors = _require.getMajors,
  getMajorDetailByUniCode = _require.getMajorDetailByUniCode,
  updateMajor = _require.updateMajor,
  searchUniversitiesAndMajors = _require.searchUniversitiesAndMajors;
var _require2 = require("../middleware/uploadMiddleware"),
  upload = _require2.upload;
majorRouter.post('/major', createMajor);
majorRouter.get("/major", getMajors);
majorRouter.get("/major/:uni_code", getMajorDetailByUniCode);
majorRouter.put("/major/:major_id", updateMajor);
majorRouter.post('/major/recommendation', searchUniversitiesAndMajors);
module.exports = {
  majorRouter: majorRouter
};