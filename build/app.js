"use strict";

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var _require = require("./routes/router"),
  rootRouter = _require.rootRouter;
var _require2 = require("./config/connectDB"),
  connectDB = _require2.connectDB;
var http = require('http');
var socketIo = require('socket.io');
require('dotenv').config();
var path = require('path');
var server = http.createServer(app);
var io = socketIo(server); // Attach socket.io to the server

// Phục vụ các file tĩnh từ thư mục 'uploads'
app.use('/uploads', express["static"](path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
//alow cors
app.use(cors());
connectDB();
app.use("/api/v1", rootRouter);
io.on('connection', function (socket) {
  console.log('A user connected', socket.id);

  // Example: Sending a welcome message to the connected client
  socket.emit('welcome', {
    message: 'Welcome to the WebSocket server!'
  });

  // Handle disconnection
  socket.on('disconnect', function () {
    console.log('User disconnected', socket.id);
  });
});
app.listen(process.env.PORT, function () {
  console.log("Server Run On Port: http://localhost:" + process.env.PORT);
});