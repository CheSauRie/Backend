"use strict";

// Trong file route (ví dụ: authRoutes.js)
var express = require('express');
var uniRouter = express.Router();
var _require = require("../controller/uniController"),
  createUniversity = _require.createUniversity,
  getUniversities = _require.getUniversities,
  deleteUniversity = _require.deleteUniversity,
  getUniversityImages = _require.getUniversityImages,
  getUniversityDetail = _require.getUniversityDetail,
  getUniversitiesByAddress = _require.getUniversitiesByAddress,
  getUniversitiesByMajor = _require.getUniversitiesByMajor;
var _require2 = require("../middleware/uploadMiddleware"),
  upload = _require2.upload;
var _require3 = require('../controller/uniScoreController'),
  getMajorsByUniversityCode = _require3.getMajorsByUniversityCode,
  getAllUniversityNames = _require3.getAllUniversityNames,
  getScoresByMajorCodeAndUniversityCode = _require3.getScoresByMajorCodeAndUniversityCode;
uniRouter.post('/universities', upload.fields([{
  name: 'logo',
  maxCount: 1
}, {
  name: 'background',
  maxCount: 1
}]), createUniversity);
uniRouter.get('/universities', getUniversities);
uniRouter["delete"]("/universities/:uniId", deleteUniversity);
uniRouter.get('/universities/images/:uniId', getUniversityImages);
uniRouter.get('/universities/details/:uni_code', getUniversityDetail);
uniRouter.post('/universities/address', getUniversitiesByAddress);
uniRouter.post('/universities/major', getUniversitiesByMajor);
// Dùng cho bảng score
uniRouter.get('/score/:uniCode/majors', getMajorsByUniversityCode);
uniRouter.get('/score/universities', getAllUniversityNames);
uniRouter.get('/score/:uniCode/majors/:majorCode/scores', getScoresByMajorCodeAndUniversityCode);
module.exports = {
  uniRouter: uniRouter
};