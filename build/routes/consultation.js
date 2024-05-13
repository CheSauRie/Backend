"use strict";

// Trong file route (ví dụ: authRoutes.js)
var express = require('express');
var consultationRouter = express.Router();
var _require = require("../controller/consultationController"),
  addConsultationSchedule = _require.addConsultationSchedule,
  getConsultationSchedules = _require.getConsultationSchedules,
  getConsultationSchedulesByUniCode = _require.getConsultationSchedulesByUniCode,
  getConsultationRequestsByScheduleId = _require.getConsultationRequestsByScheduleId,
  updateConsultationSchedule = _require.updateConsultationSchedule,
  deleteConsultationSchedule = _require.deleteConsultationSchedule,
  getConsultationsByUserId = _require.getConsultationsByUserId,
  addConsultationRequest = _require.addConsultationRequest;
var _require2 = require("../middleware/authMiddleware"),
  optionalVerifyToken = _require2.optionalVerifyToken,
  verifyToken = _require2.verifyToken;
consultationRouter.post('/consultation-schedule', addConsultationSchedule);
consultationRouter.get("/consultation-schedule", getConsultationSchedules);
consultationRouter.get("/consultation-schedule/:uni_code", getConsultationSchedulesByUniCode);
consultationRouter.put("/consultation-schedule/:schedule_id", updateConsultationSchedule);
consultationRouter["delete"]("/consultation-schedule/:schedule_id", deleteConsultationSchedule);
consultationRouter.get('/consultation-request', verifyToken, getConsultationsByUserId);
consultationRouter.post('/consultation-request', optionalVerifyToken, addConsultationRequest);
consultationRouter.get('/consultation-schedule-by-schedule-id/:schedule_id', getConsultationRequestsByScheduleId);
module.exports = {
  consultationRouter: consultationRouter
};