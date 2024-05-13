"use strict";

var express = require('express');
var _require = require("./authRoutes"),
  authRouter = _require.authRouter;
var _require2 = require("./chat"),
  chatRouter = _require2.chatRouter;
var _require3 = require("./university"),
  uniRouter = _require3.uniRouter;
var _require4 = require("./major"),
  majorRouter = _require4.majorRouter;
var _require5 = require('./review'),
  reviewRouter = _require5.reviewRouter;
var _require6 = require("./consultation"),
  consultationRouter = _require6.consultationRouter;
var _require7 = require('./follow'),
  followRouter = _require7.followRouter;
var rootRouter = express.Router();
rootRouter.use('/user', authRouter);
rootRouter.use('/chat', chatRouter);
rootRouter.use("/admin", uniRouter);
rootRouter.use("/admin", majorRouter);
rootRouter.use('/user', reviewRouter);
rootRouter.use('/user', consultationRouter);
rootRouter.use('/user', followRouter);
module.exports = {
  rootRouter: rootRouter
};