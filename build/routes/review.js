"use strict";

// Trong file route (ví dụ: authRoutes.js)
var express = require('express');
var reviewRouter = express.Router();
var _require = require("../controller/reviewController"),
  createReview = _require.createReview,
  getReviewByUniCode = _require.getReviewByUniCode;
var _require2 = require("../middleware/authMiddleware"),
  verifyToken = _require2.verifyToken;
reviewRouter.post('/add-review', verifyToken, createReview);
reviewRouter.get('/review/:uni_code', getReviewByUniCode);
module.exports = {
  reviewRouter: reviewRouter
};