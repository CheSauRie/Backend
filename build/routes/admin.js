"use strict";

var express = require('express');
var routerAdmin = express.Router();
routerAdmin.get("/", function (req, res) {
  res.send("hello admin");
});
module.exports.routerAdmin = routerAdmin;