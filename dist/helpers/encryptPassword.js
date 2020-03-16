"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = encryptPassword;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function encryptPassword(password) {
  const saltRounds = 10;
  const passwordEncode = await _bcryptjs.default.hash(password, saltRounds).then(function (hash) {
    return hash;
  });
  return passwordEncode;
}