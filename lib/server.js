"use strict";

// fileName: server.js
// Example using Express.js
var express = require('express');
var path = require('path');
var app = express();

// Serve static files from the 'front-end' directory
var frontEndPath = path.join(__dirname, '../../front-end/');
app.use(express["static"](frontEndPath));

// Specify routes
app.get('/', function (req, res) {
  res.send('<h1>Hello, Express.js Server!</h1>');
});
app.get("/index", function (req, res) {
  res.sendFile(path.join(frontEndPath, 'index.html'));
});

// Specify the port and start the server
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server is running on port ".concat(port));
});
//# sourceMappingURL=server.js.map