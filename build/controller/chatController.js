"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var _require = require("@pinecone-database/pinecone"),
  Pinecone = _require.Pinecone;
var _require2 = require("langchain/embeddings/openai"),
  OpenAIEmbeddings = _require2.OpenAIEmbeddings;
var _require3 = require("langchain/chat_models/openai"),
  ChatOpenAI = _require3.ChatOpenAI;
var _require4 = require("langchain/prompts"),
  PromptTemplate = _require4.PromptTemplate;
var _require5 = require("langchain/schema/output_parser"),
  StringOutputParser = _require5.StringOutputParser;
var _require6 = require("langchain/schema/runnable"),
  RunnablePassthrough = _require6.RunnablePassthrough,
  RunnableSequence = _require6.RunnableSequence;
var _require7 = require("langchain/chains/combine_documents"),
  createStuffDocumentsChain = _require7.createStuffDocumentsChain;
var _require8 = require('../models'),
  Chat = _require8.Chat,
  Message = _require8.Message;
var _require9 = require("@langchain/pinecone"),
  PineconeStore = _require9.PineconeStore;
var _require10 = require('html-to-text'),
  convert = _require10.convert;
var axios = require('axios');
var _require11 = require("@langchain/community/vectorstores/astradb"),
  AstraDBVectorStore = _require11.AstraDBVectorStore,
  AstraLibArgs = _require11.AstraLibArgs;
require('dotenv').config();
var openAIApiKey = process.env.OPENAI_API_KEY;
var llm = new ChatOpenAI({
  openAIApiKey: openAIApiKey,
  modelName: "gpt-4-1106-preview"
});
/**
 * Các hàm dùng cho CRD các bảng Chat, Message
 */
// Lấy danh sách đoạn chat từ người dùng
var getChat = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var id, chats;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          id = req.user.id; // decoded token lấy được user_id
          _context.next = 4;
          return Chat.findAll({
            where: {
              user_id: id
            }
          });
        case 4:
          chats = _context.sent;
          if (chats.length > 0) {
            res.status(200).json(chats);
          } else {
            res.status(404).json({
              message: 'No chats found for this user.'
            });
          }
          _context.next = 11;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            error: _context.t0.message
          });
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 8]]);
  }));
  return function getChat(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// Thêm đoạn chat input: user_id, question được xử lý về standalone_question, ouput lưu vào csdl
var createChat = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var id, question, response, summary, newChat;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          id = req.user.id; // decoded token lấy được user_id
          question = req.body.question;
          /**
           * Thêm code chỗ này đưa question về dạng summary
           */
          _context2.next = 5;
          return summaryQuestion(question);
        case 5:
          response = _context2.sent;
          summary = response.content;
          _context2.next = 9;
          return Chat.create({
            user_id: id,
            summary: summary
          });
        case 9:
          newChat = _context2.sent;
          res.status(201).json(newChat);
          _context2.next = 16;
          break;
        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            error: _context2.t0.message
          });
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 13]]);
  }));
  return function createChat(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

// xóa đoạn chat: input:user_id, chat_id
var deleteChat = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var id, chat_id;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.user.id; // decoded token lấy được user_id
          chat_id = req.query.chat_id;
          _context3.next = 5;
          return Chat.destroy({
            where: {
              chat_id: chat_id,
              user_id: id
            }
          });
        case 5:
          _context3.next = 7;
          return Message.destroy({
            where: {
              chat_id: chat_id
            }
          });
        case 7:
          res.status(200).send("xóa thành công");
          _context3.next = 13;
          break;
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            error: _context3.t0.message
          });
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 10]]);
  }));
  return function deleteChat(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

//Lấy cuộc trò chuyện tương ứng: input chat_id, có thể thêm user_id để đảm bảo an toàn, lấy toàn bộ đoạn chat
var getDetailMessage = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var chat_id, messages;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          chat_id = req.query.chat_id;
          _context4.next = 4;
          return Message.findAll({
            where: {
              chat_id: chat_id
            }
          });
        case 4:
          messages = _context4.sent;
          if (messages.length > 0) {
            res.status(200).json(messages);
          } else {
            res.status(404).json({
              message: 'No chats found for this user.'
            });
          }
          _context4.next = 11;
          break;
        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json({
            error: _context4.t0.message
          });
        case 11:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 8]]);
  }));
  return function getDetailMessage(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

//Lấy lịch sử đoạn chat cho vào prompt, lấy 5 đoạn gần nhất không phải controller
var getMessageHistory = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(chat_id) {
    var messages;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Message.findAll({
            where: {
              chat_id: chat_id
            },
            order: [['createdAt', 'DESC']],
            limit: 5
          });
        case 3:
          messages = _context5.sent;
          if (!(messages.length > 0)) {
            _context5.next = 8;
            break;
          }
          return _context5.abrupt("return", messages);
        case 8:
          console.log("No chats found for this user.");
        case 9:
          return _context5.abrupt("return", messages);
        case 12:
          _context5.prev = 12;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
        case 15:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 12]]);
  }));
  return function getMessageHistory(_x9) {
    return _ref5.apply(this, arguments);
  };
}();

//Tạo message: đầu vào là question => tạo answer => lưu answer trong csdl
var createMessage = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _req$body, chat_id, question, messages, response, summary, convHistory, aiResponse, answer, newMessage;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _req$body = req.body, chat_id = _req$body.chat_id, question = _req$body.question;
          _context6.prev = 1;
          _context6.next = 4;
          return getMessageHistory(chat_id);
        case 4:
          messages = _context6.sent;
          _context6.next = 7;
          return summaryQuestion(question);
        case 7:
          response = _context6.sent;
          // lấy kết quả
          summary = response.content; // Format lịch sử cuộc trò chuyện
          convHistory = messages.map(function (msg) {
            return "Human: ".concat(msg.question, "\n                    AI: ").concat(msg.answer);
          }); // Tìm kiếm thông tin từ Google để sử dụng làm phần của câu trả lời, đưa vào câu trả lời
          // const googleSearchResults = await googleSearch(question, 2);
          // Tạo Answer từ hàm response AI, kết hợp với kết quả tìm kiếm Google
          // const aiResponse = await responseAI(question, convHistory);
          // Tạo Answer
          _context6.next = 12;
          return queryText(question, convHistory);
        case 12:
          aiResponse = _context6.sent;
          answer = "".concat(aiResponse);
          console.log(convHistory);
          _context6.next = 17;
          return Message.create({
            chat_id: chat_id,
            question: question,
            answer: answer,
            summary: summary
          });
        case 17:
          newMessage = _context6.sent;
          res.status(201).json(newMessage);
          _context6.next = 25;
          break;
        case 21:
          _context6.prev = 21;
          _context6.t0 = _context6["catch"](1);
          console.log(_context6.t0);
          res.status(500).json({
            error: _context6.t0.message
          });
        case 25:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 21]]);
  }));
  return function createMessage(_x10, _x11) {
    return _ref6.apply(this, arguments);
  };
}();
var queryText = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(text, conversations) {
    var url, data, response;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          url = 'https://positive-bullfrog-precisely.ngrok-free.app/chat/';
          data = {
            text: text,
            conversations: conversations // This is the new part where you send the conversations
          };
          _context7.prev = 2;
          _context7.next = 5;
          return axios.post(url, data, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
        case 5:
          response = _context7.sent;
          return _context7.abrupt("return", response.data.response.response);
        case 9:
          _context7.prev = 9;
          _context7.t0 = _context7["catch"](2);
          console.error('Error making API call:', _context7.t0.response ? _context7.t0.response.data : _context7.t0.message);
        case 12:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[2, 9]]);
  }));
  return function queryText(_x12, _x13) {
    return _ref7.apply(this, arguments);
  };
}();

//Tạo bộ truy xuất
var createRetrieval = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
    var astraConfig, vectorStore, retriever;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          astraConfig = {
            token: "AstraCS:fWNRUNRAdiXkdSTGIXbZlyfk:78548a5d51e5a57ccab8afcb7ff77098796aae9c8b8efeb93476eb8fef2b8697",
            endpoint: "https://b3c0bf14-64fd-405d-8e90-e0977eb77edf-us-east-2.apps.astra.datastax.com",
            collection: "kltn_data_large"
          };
          _context8.next = 3;
          return AstraDBVectorStore.fromExistingIndex(new OpenAIEmbeddings({
            modelName: "text-embedding-3-large",
            openAIApiKey: process.env.OPENAI_API_KEY
          }), astraConfig);
        case 3:
          vectorStore = _context8.sent;
          retriever = vectorStore.asRetriever({
            k: 3
          });
          return _context8.abrupt("return", retriever);
        case 6:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function createRetrieval() {
    return _ref8.apply(this, arguments);
  };
}();

//Kết hợp tài liệu
var combineDocuments = function combineDocuments(docs) {
  console.log(docs);
  return docs.map(function (doc) {
    return doc.pageContent.replace(/\s+/g, ' ').trim();
  }).join('\n\n');
};

//Tạo phản hồi AI
var responseAI = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(question, convHistory) {
    var context, standaloneQuestionTemplate, answerTemplate, answerPrompt, standaloneQuestionPrompt, standaloneQuestionChain, answerChain, chain, response;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return queryText(question);
        case 3:
          context = _context9.sent;
          standaloneQuestionTemplate = "Given some conversation history (if any) and a question.\n        conversation history: {conv_history}\n        question: {question} \n        standalone question:\n    ";
          answerTemplate = "As a highly knowledgeable and experienced college admissions counselor, your goal is to provide guidance and support to high school students navigating the college admissions process. You will answer their questions, address their concerns, and offer expert advice tailored to their specific needs and circumstances. To receive questions or concerns from high school students, they will provide them in Vietnamese. You are to reply with detailed and informative answers based on context provided and the conversation history in Vietnamese without processing the original question or concern.\n        Use all information in context, without leaving out any information. If the answer is not given in the context, use google search results, all of your training or conversation history to come up with an answer.\n        It's more important to be accurate than complete. If you can't give a reliable answer and the question or concern is not related to your field, please say 'I don't know.'\n        Translate the answer to Vietnamese\n        Additionally, suggest 3 related questions that could further help the student understand the topic or explore related areas. These questions should encourage deeper thinking or inquiry about the subject matter. Mark the start of these questions with \"Related Questions:\" and each question should be numbered (1, 2, 3).\n        [Related Questions:]\n        1. \n        2. \n        3. \n        Context: {context}\n        Conversation history: {conv_history}\n        Question: {question}\n        answer:\n    ";
          answerPrompt = PromptTemplate.fromTemplate(answerTemplate);
          standaloneQuestionPrompt = PromptTemplate.fromTemplate(standaloneQuestionTemplate);
          standaloneQuestionChain = standaloneQuestionPrompt.pipe(llm).pipe(new StringOutputParser());
          answerChain = answerPrompt.pipe(llm).pipe(new StringOutputParser());
          chain = RunnableSequence.from([{
            standalone_question: standaloneQuestionChain,
            original_input: new RunnablePassthrough()
          }, {
            context: function context(_ref10) {
              var original_input = _ref10.original_input;
              return original_input.context;
            },
            question: function question(_ref11) {
              var original_input = _ref11.original_input;
              return original_input.question;
            },
            conv_history: function conv_history(_ref12) {
              var original_input = _ref12.original_input;
              return original_input.conv_history;
            }
          }, answerChain]);
          _context9.next = 13;
          return chain.invoke({
            question: question,
            conv_history: convHistory,
            context: context
          });
        case 13:
          response = _context9.sent;
          console.log(context);
          return _context9.abrupt("return", response);
        case 18:
          _context9.prev = 18;
          _context9.t0 = _context9["catch"](0);
          console.log(_context9.t0);
        case 21:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 18]]);
  }));
  return function responseAI(_x14, _x15) {
    return _ref9.apply(this, arguments);
  };
}();

//Đưa câu hỏi về dạng standalone
var summaryQuestion = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(question) {
    var standaloneQuestionTemplate, standaloneQuestionPrompt, standaloneQuestionChain, response;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          // A string holding the phrasing of the prompt
          standaloneQuestionTemplate = "Given a question, convert the question to a standalone question, only give the standalone question in Vietnamese, \n        do not repeat the standalone question\n        question: {question} \n        "; // A prompt created using PromptTemplate and the fromTemplate method
          standaloneQuestionPrompt = PromptTemplate.fromTemplate(standaloneQuestionTemplate); //Take the standaloneQuestionPrompt and PIPE the model
          standaloneQuestionChain = standaloneQuestionPrompt.pipe(llm); // Await the response when you invoke the chain
          _context10.next = 6;
          return standaloneQuestionChain.invoke({
            question: question
          });
        case 6:
          response = _context10.sent;
          return _context10.abrupt("return", response);
        case 10:
          _context10.prev = 10;
          _context10.t0 = _context10["catch"](0);
          console.log(_context10.t0);
        case 13:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 10]]);
  }));
  return function summaryQuestion(_x16) {
    return _ref13.apply(this, arguments);
  };
}();
// Hàm sử dụng google search
function googleSearch(_x17, _x18) {
  return _googleSearch.apply(this, arguments);
}
function _googleSearch() {
  _googleSearch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(query, numResult) {
    var apiKey, cseId, numResults, url, response, data;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          apiKey = process.env.API_KEY_GOOGLE_SEARCH;
          cseId = process.env.CSEID;
          numResults = numResult; // Số lượng kết quả bạn muốn trả về
          url = "https://www.googleapis.com/customsearch/v1?key=".concat(apiKey, "&cx=").concat(cseId, "&q=").concat(encodeURIComponent(query), "&num=").concat(numResults);
          _context11.prev = 4;
          _context11.next = 7;
          return fetch(url);
        case 7:
          response = _context11.sent;
          _context11.next = 10;
          return response.json();
        case 10:
          data = _context11.sent;
          if (!(data.items && data.items.length > 0)) {
            _context11.next = 15;
            break;
          }
          return _context11.abrupt("return", data.items.slice(0, numResults).map(function (item, index) {
            return "".concat(index + 1, ". ").concat(item.title, ": ").concat(item.link);
          }).join('\n'));
        case 15:
          return _context11.abrupt("return", 'Không tìm thấy kết quả.');
        case 16:
          _context11.next = 22;
          break;
        case 18:
          _context11.prev = 18;
          _context11.t0 = _context11["catch"](4);
          console.error('Lỗi khi tìm kiếm Google:', _context11.t0);
          return _context11.abrupt("return", 'Có lỗi xảy ra khi tìm kiếm.');
        case 22:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[4, 18]]);
  }));
  return _googleSearch.apply(this, arguments);
}
module.exports = {
  responseAI: responseAI,
  getChat: getChat,
  createChat: createChat,
  deleteChat: deleteChat,
  getDetailMessage: getDetailMessage,
  createMessage: createMessage,
  summaryQuestion: summaryQuestion,
  queryText: queryText
};