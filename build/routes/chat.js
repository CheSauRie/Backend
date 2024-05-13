"use strict";

// Trong file route (ví dụ: authRoutes.js)
var express = require('express');
var chatRouter = express.Router();
var _require = require("../controller/chatController"),
  responseAI = _require.responseAI,
  queryText = _require.queryText,
  getChat = _require.getChat,
  createChat = _require.createChat,
  deleteChat = _require.deleteChat,
  getDetailMessage = _require.getDetailMessage,
  createMessage = _require.createMessage;
var _require2 = require("../middleware/authMiddleware"),
  verifyToken = _require2.verifyToken;
chatRouter.post('/', responseAI);
chatRouter.get('/get-chat', verifyToken, getChat);
chatRouter.post("/create-chat", verifyToken, createChat);
chatRouter["delete"]('/delete-chat', verifyToken, deleteChat);
chatRouter.get('/detail-message', getDetailMessage);
chatRouter.post('/create-message', verifyToken, createMessage);
chatRouter.post('/retrieve', queryText);
module.exports = {
  chatRouter: chatRouter
};