"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _addUser = _interopRequireDefault(require("./add-user"));

var _loginUser = _interopRequireDefault(require("./login-user"));

var _usesCases = require("../../uses-cases");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const addUser = (0, _addUser.default)(_usesCases.userServices.addUser);
const loginUser = (0, _loginUser.default)(_usesCases.userServices.loginUser);
const userController = {
  addUser,
  loginUser
};
var _default = userController;
exports.default = _default;