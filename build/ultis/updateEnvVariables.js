"use strict";

var fs = require('fs');
var path = require('path');
function updateEnvVariable(key, value) {
  var envPath = path.join(__dirname, '.env');
  var envContent = fs.readFileSync(envPath, {
    encoding: 'utf-8'
  });
  var envLines = envContent.split('\n');
  var keyIndex = envLines.findIndex(function (line) {
    return line.startsWith("".concat(key, "="));
  });
  if (keyIndex !== -1) {
    envLines[keyIndex] = "".concat(key, "=").concat(value);
  } else {
    envLines.push("".concat(key, "=").concat(value));
  }
  envContent = envLines.join('\n');
  fs.writeFileSync(envPath, envContent, {
    encoding: 'utf-8'
  });
}
module.exports = {
  updateEnvVariable: updateEnvVariable
};