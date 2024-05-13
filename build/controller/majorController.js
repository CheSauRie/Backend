"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var _require = require('../models'),
  Major = _require.Major,
  University = _require.University,
  MarkdownUni = _require.MarkdownUni;
var _require2 = require('sequelize'),
  Sequelize = _require2.Sequelize;
var _require3 = require('../ultis/replaceEscapedNewlines'),
  replaceEscapedNewlines = _require3.replaceEscapedNewlines;
var createMajor = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, uni_id, major_name, major_code, admissions_information, admissions_method, description_major, quota, major;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, uni_id = _req$body.uni_id, major_name = _req$body.major_name, major_code = _req$body.major_code, admissions_information = _req$body.admissions_information, admissions_method = _req$body.admissions_method, description_major = _req$body.description_major, quota = _req$body.quota; // Tạo major mới
          _context.next = 4;
          return Major.create({
            uni_id: uni_id,
            major_name: major_name,
            major_code: major_code,
            admissions_information: admissions_information,
            admissions_method: admissions_method,
            description_major: description_major,
            quota: quota
          });
        case 4:
          major = _context.sent;
          res.status(201).json(major);
          _context.next = 12;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error('Error creating major:', _context.t0);
          res.status(500).json({
            message: 'Error creating major',
            error: _context.t0.message
          });
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 8]]);
  }));
  return function createMajor(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getMajors = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var major;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Major.findAll();
        case 3:
          major = _context2.sent;
          res.json({
            major: major
          });
          _context2.next = 10;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            message: "Could not fetch majors",
            error: _context2.t0.message
          });
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function getMajors(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

// Detail Major
var getMajorDetailByUniCode = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var uni_code, uni, major, processedMajors;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          uni_code = req.params.uni_code;
          _context3.next = 4;
          return University.findOne({
            where: {
              uni_code: uni_code
            }
          });
        case 4:
          uni = _context3.sent;
          _context3.next = 7;
          return Major.findAll({
            where: {
              uni_id: uni.uni_id
            }
          });
        case 7:
          major = _context3.sent;
          if (major) {
            _context3.next = 10;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            message: 'major not found.'
          }));
        case 10:
          processedMajors = major.map(function (m) {
            for (var key in m.dataValues) {
              m.dataValues[key] = replaceEscapedNewlines(m.dataValues[key]);
            }
            return m;
          });
          res.status(200).json(processedMajors);
          _context3.next = 18;
          break;
        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](0);
          console.error('Error fetching major detail:', _context3.t0);
          res.status(500).json({
            message: 'Error fetching major detail',
            error: _context3.t0.message
          });
        case 18:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 14]]);
  }));
  return function getMajorDetailByUniCode(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
//update Major
var updateMajor = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var major_id, _req$body2, admissions_information, admissions_method, description_major, quota, major;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          major_id = req.params.major_id; // Lấy ID của ngành từ params
          _req$body2 = req.body, admissions_information = _req$body2.admissions_information, admissions_method = _req$body2.admissions_method, description_major = _req$body2.description_major, quota = _req$body2.quota; // Lấy dữ liệu cần cập nhật từ body của request
          _context4.prev = 2;
          _context4.next = 5;
          return Major.findByPk(major_id);
        case 5:
          major = _context4.sent;
          if (major) {
            _context4.next = 8;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            message: "Major not found"
          }));
        case 8:
          _context4.next = 10;
          return Major.update({
            admissions_information: admissions_information,
            admissions_method: admissions_method,
            description_major: description_major,
            quota: quota
          }, {
            where: {
              major_id: major_id
            }
          });
        case 10:
          // Gửi phản hồi thành công
          res.status(200).json({
            message: "Major updated successfully"
          });
          _context4.next = 17;
          break;
        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](2);
          // Xử lý lỗi và gửi phản hồi lỗi
          console.error('Error updating major:', _context4.t0);
          res.status(500).json({
            message: "Error updating major",
            error: _context4.t0.message
          });
        case 17:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 13]]);
  }));
  return function updateMajor(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

//Recommend ngành học khi nhập vài dữ liệu:
// const searchUniversitiesAndMajors = async (req, res) => {
//     const { desiredTuition, certificates, fieldOfInterest, country, desiredFacilities } = req.body;

//     try {
//         // Tạo truy vấn động dựa trên các tiêu chí
//         let universityQuery = `SELECT * FROM universities WHERE `;
//         let majorQueryConditions = [];
//         let universityQueryConditions = [];

//         // Học phí
//         if (desiredTuition) {
//             universityQueryConditions.push(`tution_fee LIKE '%${desiredTuition}%'`);
//         }

//         // Chứng chỉ và điểm
//         if (certificates && certificates.length > 0) {
//             certificates.forEach(certificate => {
//                 majorQueryConditions.push(`admissions_information LIKE '%${certificate.name}: ${certificate.score}%'`);
//             });
//         }

//         // Lĩnh vực/ngành học quan tâm
//         if (fieldOfInterest) {
//             majorQueryConditions.push(`description_major LIKE '%${fieldOfInterest}%'`);
//         }

//         // Quốc gia
//         if (country) {
//             universityQueryConditions.push(`country LIKE '%${country}%'`);
//         }

//         // Cơ sở vật chất
//         if (desiredFacilities && desiredFacilities.length > 0) {
//             desiredFacilities.forEach(facility => {
//                 universityQueryConditions.push(`description LIKE '%${facility}%'`);
//             });
//         }

//         // Kết hợp các điều kiện truy vấn
//         universityQuery += universityQueryConditions.join(' AND ');

//         // Thực hiện truy vấn
//         const universities = await sequelize.query(universityQuery, { type: sequelize.QueryTypes.SELECT });
//         let majors = [];
//         if (universities.length > 0) {
//             const uniIds = universities.map(uni => uni.uni_id);
//             majors = await Major.findAll({
//                 where: {
//                     [Sequelize.Op.and]: [
//                         { uni_id: uniIds },
//                         Sequelize.literal(majorQueryConditions.join(' AND '))
//                     ]
//                 }
//             });
//         }

//         // Trả về kết quả
//         res.json({ universities, majors });
//     } catch (error) {
//         console.error('Error searching for universities and majors:', error);
//         res.status(500).json({ message: 'Error searching for universities and majors', error: error.message });
//     }
// };

var searchUniversitiesAndMajors = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _req$body3, desiredTuition, certificates, fieldOfInterest, desiredFacilities, universityQueryConditions, facilityCondition, universities, majorQueryConditions, majors, uniIds;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _req$body3 = req.body, desiredTuition = _req$body3.desiredTuition, certificates = _req$body3.certificates, fieldOfInterest = _req$body3.fieldOfInterest, desiredFacilities = _req$body3.desiredFacilities;
          _context5.prev = 1;
          // Tạo truy vấn động dựa trên các tiêu chí cho University
          universityQueryConditions = []; // Học phí
          if (desiredTuition) {
            universityQueryConditions.push({
              tution_fee: _defineProperty({}, Sequelize.Op.like, "%".concat(desiredTuition, "%"))
            });
          }

          // Cơ sở vật chất (Giả sử nằm trong mô tả của Major chứ không phải University)
          facilityCondition = {};
          if (desiredFacilities && desiredFacilities.length > 0) {
            facilityCondition = _defineProperty({}, Sequelize.Op.or, desiredFacilities.map(function (facility) {
              return {
                description_major: _defineProperty({}, Sequelize.Op.like, "%".concat(facility, "%"))
              };
            }));
          }

          // Truy vấn universities dựa trên các tiêu chí
          _context5.next = 8;
          return MarkdownUni.findAll({
            where: _defineProperty({}, Sequelize.Op.and, universityQueryConditions)
          });
        case 8:
          universities = _context5.sent;
          majorQueryConditions = []; // Chứng chỉ và điểm
          if (certificates && certificates.length > 0) {
            certificates.forEach(function (certificate) {
              majorQueryConditions.push(sequelize.where(sequelize.fn('', sequelize.col('admissions_information')), 'LIKE', "%".concat(certificate.name, ": ").concat(certificate.score, "%")));
            });
          }

          // Lĩnh vực/ngành học quan tâm
          if (fieldOfInterest) {
            majorQueryConditions.push({
              description_major: _defineProperty({}, Sequelize.Op.like, "%".concat(fieldOfInterest, "%"))
            });
          }

          // Thêm điều kiện về cơ sở vật chất vào majorQueryConditions nếu có
          if (Object.keys(facilityCondition).length > 0) {
            majorQueryConditions.push(facilityCondition);
          }
          majors = [];
          if (!(universities.length > 0)) {
            _context5.next = 19;
            break;
          }
          uniIds = universities.map(function (uni) {
            return uni.uni_id;
          });
          _context5.next = 18;
          return Major.findAll({
            where: _defineProperty({}, Sequelize.Op.and, [{
              uni_id: uniIds
            }].concat(majorQueryConditions))
          });
        case 18:
          majors = _context5.sent;
        case 19:
          // Trả về kết quả
          res.json({
            universities: universities,
            majors: majors,
            universityQueryConditions: universityQueryConditions,
            majorQueryConditions: majorQueryConditions
          });
          _context5.next = 26;
          break;
        case 22:
          _context5.prev = 22;
          _context5.t0 = _context5["catch"](1);
          console.error('Error searching for universities and majors:', _context5.t0);
          res.status(500).json({
            message: 'Error searching for universities and majors',
            error: _context5.t0.message
          });
        case 26:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 22]]);
  }));
  return function searchUniversitiesAndMajors(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
module.exports = {
  createMajor: createMajor,
  getMajors: getMajors,
  getMajorDetailByUniCode: getMajorDetailByUniCode,
  updateMajor: updateMajor,
  searchUniversitiesAndMajors: searchUniversitiesAndMajors
};