"use strict";

// Trong file route (ví dụ: authRoutes.js)
var express = require('express');
var followRouter = express.Router();
var _require = require("../controller/followController.js"),
  followUniversity = _require.followUniversity,
  getFollowUni = _require.getFollowUni,
  unfollowUniversity = _require.unfollowUniversity;
var _require2 = require("../middleware/authMiddleware"),
  verifyToken = _require2.verifyToken;
followRouter.post('/follow', verifyToken, followUniversity);
followRouter.get('/follow', verifyToken, getFollowUni);
followRouter["delete"]('/follow/:uni_id', verifyToken, unfollowUniversity);
module.exports = {
  followRouter: followRouter
};