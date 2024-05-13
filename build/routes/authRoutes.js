"use strict";

// Trong file route (ví dụ: authRoutes.js)
var express = require('express');
var authRouter = express.Router();
var _require = require('../controller/authController'),
  register = _require.register,
  login = _require.login,
  emailVerify = _require.emailVerify,
  requestPasswordReset = _require.requestPasswordReset,
  resetPassword = _require.resetPassword,
  changePassword = _require.changePassword;
var _require2 = require('../middleware/authMiddleware'),
  verifyToken = _require2.verifyToken;
var _require3 = require('../middleware/checkVerifyAccount'),
  checkIsVerified = _require3.checkIsVerified;

// Đăng ký
authRouter.post('/register', register);

// Xác minh email
authRouter.get('/verify-email', emailVerify);

// Đăng nhập
authRouter.post('/login', login);

// Yêu cầu đặt lại mật khẩu
authRouter.post('/request-reset-password', requestPasswordReset);

// Đặt lại mật khẩu
authRouter.post('/reset-password', resetPassword);

// Thay đổi mật khẩu
authRouter.post("/change-password", verifyToken, changePassword);
module.exports = {
  authRouter: authRouter
};