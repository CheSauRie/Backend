"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var _require = require('../models'),
  Consultation_schedules = _require.Consultation_schedules,
  User = _require.User,
  University = _require.University,
  Consultation_requests = _require.Consultation_requests;
var _require2 = require('../ultis/updateEnvVariables'),
  updateEnvVariable = _require2.updateEnvVariable;
var nodemailer = require('nodemailer');
require('dotenv').config();
var _require3 = require('googleapis'),
  google = _require3.google;
var OAuth2 = google.auth.OAuth2;
function getConfiguredOAuth2Client() {
  var oAuth2Client = new OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET);
  oAuth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
  });
  oAuth2Client.on('tokens', function (tokens) {
    if (tokens.refresh_token) {
      // Lưu refresh token mới vào cơ sở dữ liệu hoặc biến môi trường
      console.log("New refresh token: ".concat(tokens.refresh_token));
      updateEnvVariable('REFRESH_TOKEN', tokens.refresh_token);
      // Cập nhật refresh token trong cấu hình
      oAuth2Client.setCredentials({
        refresh_token: tokens.refresh_token
      });
    }
    oAuth2Client.setCredentials({
      access_token: tokens.access_token
    });
  });
  return oAuth2Client;
}
var oAuth2Client = getConfiguredOAuth2Client();
var calendar = google.calendar({
  version: 'v3',
  auth: oAuth2Client
});
function createGoogleMeet(_x, _x2) {
  return _createGoogleMeet.apply(this, arguments);
}
function _createGoogleMeet() {
  _createGoogleMeet = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(startMeeting, endMeeting) {
    var event, _yield$calendar$event, data;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          event = {
            summary: 'Cuộc họp tư vấn',
            description: 'Cuộc họp tư vấn cho sinh viên.',
            start: {
              dateTime: startMeeting,
              // ISO string e.g., "2024-02-27T09:00:00-07:00"
              timeZone: 'Asia/Ho_Chi_Minh'
            },
            end: {
              dateTime: endMeeting,
              // ISO string e.g., "2024-02-27T10:00:00-07:00"
              timeZone: 'Asia/Ho_Chi_Minh'
            },
            conferenceData: {
              createRequest: {
                requestId: "sample123",
                conferenceSolutionKey: {
                  type: "hangoutsMeet"
                }
              }
            }
          };
          _context10.prev = 1;
          _context10.next = 4;
          return calendar.events.insert({
            calendarId: 'primary',
            resource: event,
            conferenceDataVersion: 1,
            sendNotifications: true
          });
        case 4:
          _yield$calendar$event = _context10.sent;
          data = _yield$calendar$event.data;
          return _context10.abrupt("return", data.hangoutLink);
        case 9:
          _context10.prev = 9;
          _context10.t0 = _context10["catch"](1);
          console.error('Error creating Google Meet event:', _context10.t0);
          throw _context10.t0;
        case 13:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[1, 9]]);
  }));
  return _createGoogleMeet.apply(this, arguments);
}
var sendConsultationConfirmationEmail = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(consultationEmail, consultationName, timeConsulting, meetUrl, uniName, consulting_information) {
    var transporter;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.EMAIL_USERNAME,
              pass: process.env.EMAIL_PASSWORD
            }
          });
          _context.next = 3;
          return transporter.sendMail({
            from: "\"H\u1EC7 th\u1ED1ng t\u01B0 v\u1EA5n tuy\u1EC3n sinh\" <".concat(process.env.EMAIL_USERNAME, ">"),
            to: consultationEmail,
            subject: 'Xác nhận yêu cầu tư vấn',
            text: "Xin ch\xE0o ".concat(consultationName, ",\n\nY\xEAu c\u1EA7u t\u01B0 v\u1EA5n c\u1EE7a b\u1EA1n \u0111\xE3 \u0111\u01B0\u1EE3c nh\u1EADn.\n        \nTr\u01B0\u1EDDng: ").concat(uniName, " \n        \nY\xEAu c\u1EA7u t\u01B0 v\u1EA5n c\u1EE7a b\u1EA1n: ").concat(consulting_information, "\n        \nTh\u1EDDi gian t\u01B0 v\u1EA5n c\u1EE7a b\u1EA1n l\xE0: ").concat(timeConsulting, "\n        \nLink ph\xF2ng h\u1ECDp: ").concat(meetUrl, "\n        \n\nTr\xE2n tr\u1ECDng,")
          });
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function sendConsultationConfirmationEmail(_x3, _x4, _x5, _x6, _x7, _x8) {
    return _ref.apply(this, arguments);
  };
}();

//Người dùng thêm yêu cầu tư vấn
var addConsultationRequest = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body, schedule_id, consulting_information, user_id, user_phone, user_email, username, user, newConsultation, schedule, timeConsulting, meetUrl, uni, uniName;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, schedule_id = _req$body.schedule_id, consulting_information = _req$body.consulting_information;
          user_id = null;
          if (!req.user) {
            _context2.next = 15;
            break;
          }
          user_id = req.user.id;

          // Truy vấn thông tin người dùng từ bảng Users
          _context2.prev = 4;
          _context2.next = 7;
          return User.findByPk(user_id);
        case 7:
          user = _context2.sent;
          if (user) {
            // Lấy thông tin từ bảng Users nếu người dùng đã đăng nhập
            // user_phone = user.phone; // Giả sử trường thông tin điện thoại trong bảng User là phone
            user_email = user.email;
            username = user.username;
          }
          _context2.next = 15;
          break;
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](4);
          console.error("Failed to retrieve user information:", _context2.t0);
          return _context2.abrupt("return", res.status(500).send("An error occurred while retrieving user information."));
        case 15:
          // Nếu người dùng không đăng nhập, sử dụng thông tin từ request body
          if (!user_id) {
            user_phone = req.body.user_phone || null;
            user_email = req.body.user_email || null;
            username = req.body.username || null;
          }
          _context2.prev = 16;
          _context2.next = 19;
          return Consultation_requests.create({
            user_id: user_id,
            schedule_id: schedule_id,
            consulting_information: consulting_information,
            user_phone: user_phone,
            user_email: user_email,
            username: username
          });
        case 19:
          newConsultation = _context2.sent;
          _context2.next = 22;
          return Consultation_schedules.findByPk(schedule_id);
        case 22:
          schedule = _context2.sent;
          if (!schedule) {
            _context2.next = 33;
            break;
          }
          timeConsulting = schedule.consultation_time;
          meetUrl = schedule.meet_url;
          _context2.next = 28;
          return University.findByPk(schedule.uni_id);
        case 28:
          uni = _context2.sent;
          uniName = uni.uni_name;
          sendConsultationConfirmationEmail(user_email, username, timeConsulting, meetUrl, uniName, consulting_information).then(function () {
            console.log('Email xác nhận đã được gửi.');
          })["catch"](function (error) {
            console.error('Lỗi khi gửi email xác nhận:', error);
          });
          _context2.next = 34;
          break;
        case 33:
          return _context2.abrupt("return", res.status(404).json({
            message: 'Cannot find schedule'
          }));
        case 34:
          return _context2.abrupt("return", res.status(201).json({
            message: "Consultation request submitted successfully.",
            consultation: newConsultation
          }));
        case 37:
          _context2.prev = 37;
          _context2.t1 = _context2["catch"](16);
          console.error("Failed to add consultation:", _context2.t1);
          return _context2.abrupt("return", res.status(500).send("An error occurred while submitting the consultation request."));
        case 41:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[4, 11], [16, 37]]);
  }));
  return function addConsultationRequest(_x9, _x10) {
    return _ref2.apply(this, arguments);
  };
}();

//Người dùng lấy danh sách tư vấn bằng user_id
var getConsultationsByUserId = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var id, consultations, formattedConsultations;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          id = req.user.id;
          _context3.prev = 1;
          _context3.next = 4;
          return Consultation_requests.findAll({
            where: {
              user_id: id
            },
            include: [{
              model: Consultation_schedules,
              attributes: ['schedule_id', 'meet_url', 'consultation_time'],
              include: [{
                model: University,
                attributes: ['uni_name']
              }]
            }],
            attributes: ['request_id', 'consulting_information', 'schedule_id']
          });
        case 4:
          consultations = _context3.sent;
          if (consultations) {
            _context3.next = 7;
            break;
          }
          return _context3.abrupt("return", res.status(404).send("Consultations not found."));
        case 7:
          formattedConsultations = consultations.map(function (consultation) {
            return {
              schedule_id: consultation.schedule_id,
              consulting_information: consultation.consulting_information,
              consultation_phone: consultation.user_phone,
              consultation_email: consultation.user_email,
              consultation_name: consultation.user_name,
              uni_name: consultation.Consultation_schedule.University.uni_name,
              consultation_time: consultation.Consultation_schedule.consultation_time,
              meet_url: consultation.Consultation_schedule.meet_url
            };
          });
          return _context3.abrupt("return", res.status(200).json(formattedConsultations));
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](1);
          console.error("Failed to retrieve consultations:", _context3.t0);
          return _context3.abrupt("return", res.status(500).send("An error occurred while retrieving consultations."));
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 11]]);
  }));
  return function getConsultationsByUserId(_x11, _x12) {
    return _ref3.apply(this, arguments);
  };
}();

// Admin thêm lịch tư vấn
var addConsultationSchedule = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _req$body2, uni_id, consultation_time, university, endTime, meetUrl, newSchedule;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _req$body2 = req.body, uni_id = _req$body2.uni_id, consultation_time = _req$body2.consultation_time;
          _context4.prev = 1;
          _context4.next = 4;
          return University.findByPk(uni_id);
        case 4:
          university = _context4.sent;
          if (university) {
            _context4.next = 7;
            break;
          }
          return _context4.abrupt("return", res.status(404).send("University not found"));
        case 7:
          // Định dạng thời gian kết thúc cho cuộc họp (ví dụ: thêm 1 giờ)
          endTime = new Date(consultation_time);
          endTime.setHours(endTime.getHours() + 1); // Thêm 1 giờ cho thời gian kết thúc

          // Tạo cuộc họp Google Meet
          _context4.next = 11;
          return createGoogleMeet(consultation_time, endTime.toISOString());
        case 11:
          meetUrl = _context4.sent;
          _context4.next = 14;
          return Consultation_schedules.create({
            uni_id: uni_id,
            consultation_time: consultation_time,
            meet_url: meetUrl
          });
        case 14:
          newSchedule = _context4.sent;
          return _context4.abrupt("return", res.status(201).json({
            message: "Consultation schedule created successfully.",
            schedule: newSchedule
          }));
        case 18:
          _context4.prev = 18;
          _context4.t0 = _context4["catch"](1);
          console.error("Failed to create consultation schedule:", _context4.t0);
          return _context4.abrupt("return", res.status(500).send("An error occurred while creating the consultation schedule."));
        case 22:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 18]]);
  }));
  return function addConsultationSchedule(_x13, _x14) {
    return _ref4.apply(this, arguments);
  };
}();

// Admin lấy toàn bộ lịch tư vấn
var getConsultationSchedules = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var consultationSchedules, formattedSchedules;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Consultation_schedules.findAll({
            include: [{
              model: University,
              attributes: ['uni_name'] // Lấy chỉ tên trường đại học
            }],
            attributes: ['schedule_id', 'uni_id', 'consultation_time', 'meet_url'] // Lấy các trường bạn cần từ consultation_schedules
          });
        case 3:
          consultationSchedules = _context5.sent;
          if (consultationSchedules) {
            _context5.next = 6;
            break;
          }
          return _context5.abrupt("return", res.status(404).send("No consultation schedules found."));
        case 6:
          formattedSchedules = consultationSchedules.map(function (schedule) {
            return {
              schedule_id: schedule.schedule_id,
              uni_id: schedule.uni_id,
              uni_name: schedule.University.uni_name,
              consultation_time: schedule.consultation_time,
              meet_url: schedule.meet_url
            };
          });
          return _context5.abrupt("return", res.status(200).json(formattedSchedules));
        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          console.error("Failed to retrieve consultation schedules:", _context5.t0);
          return _context5.abrupt("return", res.status(500).send("An error occurred while retrieving consultation schedules."));
        case 14:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 10]]);
  }));
  return function getConsultationSchedules(_x15, _x16) {
    return _ref5.apply(this, arguments);
  };
}();

// Admin lấy tư vấn bởi uni_code
var getConsultationSchedulesByUniCode = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var uni_code, university, consultationSchedules, formattedSchedules;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          uni_code = req.params.uni_code;
          _context6.prev = 1;
          _context6.next = 4;
          return University.findOne({
            where: {
              uni_code: uni_code
            }
          });
        case 4:
          university = _context6.sent;
          if (university) {
            _context6.next = 7;
            break;
          }
          return _context6.abrupt("return", res.status(404).send("University not found."));
        case 7:
          _context6.next = 9;
          return Consultation_schedules.findAll({
            where: {
              uni_id: university.uni_id
            },
            include: [{
              model: University,
              attributes: ['uni_name', 'uni_code'] // Lấy tên và mã trường
            }],
            attributes: ['schedule_id', 'uni_id', 'consultation_time'] // Các thông tin cần lấy từ consultation_schedules
          });
        case 9:
          consultationSchedules = _context6.sent;
          if (!(consultationSchedules.length === 0)) {
            _context6.next = 12;
            break;
          }
          return _context6.abrupt("return", res.status(404).send("No consultation schedules found for the specified university."));
        case 12:
          formattedSchedules = consultationSchedules.map(function (schedule) {
            return {
              schedule_id: schedule.schedule_id,
              uni_id: schedule.uni_id,
              uni_name: schedule.University.uni_name,
              uni_code: schedule.University.uni_code,
              consultation_time: schedule.consultation_time,
              meet_url: schedule.meet_url
            };
          });
          return _context6.abrupt("return", res.status(200).json(formattedSchedules));
        case 16:
          _context6.prev = 16;
          _context6.t0 = _context6["catch"](1);
          console.error("Failed to retrieve consultation schedules:", _context6.t0);
          return _context6.abrupt("return", res.status(500).send("An error occurred while retrieving consultation schedules."));
        case 20:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 16]]);
  }));
  return function getConsultationSchedulesByUniCode(_x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();

// Update lịch tư vấn admin
var updateConsultationSchedule = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var schedule_id, _req$body3, consultation_time, meet_url, schedule;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          schedule_id = req.params.schedule_id;
          _req$body3 = req.body, consultation_time = _req$body3.consultation_time, meet_url = _req$body3.meet_url;
          _context7.prev = 2;
          _context7.next = 5;
          return Consultation_schedules.findByPk(schedule_id);
        case 5:
          schedule = _context7.sent;
          if (schedule) {
            _context7.next = 8;
            break;
          }
          return _context7.abrupt("return", res.status(404).send("Consultation schedule not found."));
        case 8:
          // Cập nhật lịch tư vấn với thông tin mới
          if (consultation_time) schedule.consultation_time = consultation_time;
          if (meet_url) schedule.meet_url = meet_url;
          _context7.next = 12;
          return schedule.save();
        case 12:
          return _context7.abrupt("return", res.status(200).json({
            message: "Consultation schedule updated successfully.",
            schedule: {
              schedule_id: schedule.schedule_id,
              uni_id: schedule.uni_id,
              consultation_time: schedule.consultation_time,
              meet_url: schedule.meet_url
            }
          }));
        case 15:
          _context7.prev = 15;
          _context7.t0 = _context7["catch"](2);
          console.error("Failed to update consultation schedule:", _context7.t0);
          return _context7.abrupt("return", res.status(500).send("An error occurred while updating the consultation schedule."));
        case 19:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[2, 15]]);
  }));
  return function updateConsultationSchedule(_x19, _x20) {
    return _ref7.apply(this, arguments);
  };
}();

// Xóa lịch tư vấn admin
var deleteConsultationSchedule = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var schedule_id, schedule;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          schedule_id = req.params.schedule_id;
          _context8.next = 4;
          return Consultation_schedules.findByPk(schedule_id);
        case 4:
          schedule = _context8.sent;
          if (schedule) {
            _context8.next = 7;
            break;
          }
          return _context8.abrupt("return", res.status(404).send({
            message: "Schedule not found."
          }));
        case 7:
          _context8.next = 9;
          return schedule.destroy();
        case 9:
          return _context8.abrupt("return", res.status(200).send({
            message: "Schedule deleted successfully."
          }));
        case 12:
          _context8.prev = 12;
          _context8.t0 = _context8["catch"](0);
          console.error("Error deleting schedule:", _context8.t0);
          return _context8.abrupt("return", res.status(500).send({
            message: "Error deleting schedule."
          }));
        case 16:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 12]]);
  }));
  return function deleteConsultationSchedule(_x21, _x22) {
    return _ref8.apply(this, arguments);
  };
}();

// Lấy danh sách người dùng dựa trên schedule_id
var getConsultationRequestsByScheduleId = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var schedule_id, consultationSchedule, consultationDetails;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          schedule_id = req.params.schedule_id;
          _context9.prev = 1;
          _context9.next = 4;
          return Consultation_schedules.findOne({
            where: {
              schedule_id: schedule_id
            },
            include: [{
              model: Consultation_requests,
              attributes: ['user_email', 'username', 'consulting_information']
            }]
          });
        case 4:
          consultationSchedule = _context9.sent;
          if (consultationSchedule) {
            _context9.next = 7;
            break;
          }
          return _context9.abrupt("return", res.status(404).send("No schedule found with the given schedule_id."));
        case 7:
          // Format lại dữ liệu consultationRequests
          consultationDetails = consultationSchedule.Consultation_requests.map(function (consultation) {
            return {
              userName: consultation.username,
              // Trường 'username' lấy từ model Consultation_requests
              userEmail: consultation.user_email,
              // Trường 'user_email' lấy từ model Consultation_requests
              consultingInformation: consultation.consulting_information // Trường 'consulting_information' lấy từ model Consultation_requests
            };
          });
          return _context9.abrupt("return", res.status(200).json(consultationDetails));
        case 11:
          _context9.prev = 11;
          _context9.t0 = _context9["catch"](1);
          console.error("Failed to retrieve consultation requests by schedule_id:", _context9.t0);
          return _context9.abrupt("return", res.status(500).send("An error occurred while retrieving consultation requests."));
        case 15:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[1, 11]]);
  }));
  return function getConsultationRequestsByScheduleId(_x23, _x24) {
    return _ref9.apply(this, arguments);
  };
}();
module.exports = {
  addConsultationSchedule: addConsultationSchedule,
  getConsultationSchedules: getConsultationSchedules,
  getConsultationSchedulesByUniCode: getConsultationSchedulesByUniCode,
  updateConsultationSchedule: updateConsultationSchedule,
  deleteConsultationSchedule: deleteConsultationSchedule,
  getConsultationsByUserId: getConsultationsByUserId,
  addConsultationRequest: addConsultationRequest,
  getConsultationRequestsByScheduleId: getConsultationRequestsByScheduleId
};