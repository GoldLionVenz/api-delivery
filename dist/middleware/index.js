"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Auth", {
  enumerable: true,
  get: function () {
    return _auth.default;
  }
});
Object.defineProperty(exports, "SuperAdmin", {
  enumerable: true,
  get: function () {
    return _superAdmin.default;
  }
});

var _auth = _interopRequireDefault(require("./auth"));

var _superAdmin = _interopRequireDefault(require("./super-admin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }