"use strict";

var jwt = require('jsonwebtoken');
require('dotenv').config();
var verifyToken = function verifyToken(req, res, next) {
  var token = req.header("token");
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    var decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};
var optionalVerifyToken = function optionalVerifyToken(req, res, next) {
  var token = req.header("token");
  if (!token) {
    return next();
  }
  try {
    var decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
  } catch (err) {
    // Nếu token không hợp lệ, vẫn cho tiếp tục nhưng không set req.user
  }
  next();
};
module.exports = {
  verifyToken: verifyToken,
  optionalVerifyToken: optionalVerifyToken
};