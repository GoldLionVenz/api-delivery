"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createOrder = _interopRequireDefault(require("./create-order"));

var _checkOrderStatus = _interopRequireDefault(require("./check-order-status"));

var _usesCases = require("../../uses-cases");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createOrder = (0, _createOrder.default)(_usesCases.orderServices.createOrder);
const checkOrderStatus = (0, _checkOrderStatus.default)(_usesCases.orderServices.checkOrderStatus);
const orderController = {
  createOrder,
  checkOrderStatus
};
var _default = orderController;
exports.default = _default;