"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addUser = exports.default = void 0;

var _addUser = _interopRequireDefault(require("./add-user"));

var _models = require("../../models");

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _login = _interopRequireDefault(require("./login"));

var _updateUser = _interopRequireDefault(require("./update-user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const addUser = (0, _addUser.default)({
  userModel: _models.userModel,
  encryptPassword: _bcryptjs.default
});
exports.addUser = addUser;
const loginUser = (0, _login.default)({
  userModel: _models.userModel,
  jwt: _jsonwebtoken.default
});
const updateUser = (0, _updateUser.default)({
  userModel: _models.userModel
});
const userServices = Object.freeze({
  addUser,
  loginUser,
  updateUser
});
var _default = userServices;
exports.default = _default;