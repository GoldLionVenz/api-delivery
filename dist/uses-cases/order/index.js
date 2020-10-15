"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createOrder = _interopRequireDefault(require("./create-order"));

var _checkOrderStatus = _interopRequireDefault(require("./check-order-status"));

var _helpers = require("../../helpers");

var _models = require("../../models");

var _paypalGateway = _interopRequireDefault(require("../../paypal-gateway"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createOrder = (0, _createOrder.default)({
  shoppingCartModel: _models.shoppingCartModel,
  orderModel: _models.orderModel,
  getShoppingCartResponse: _helpers.getShoppingCartResponse,
  paymentGateWay: _paypalGateway.default,
  now: _helpers.now
});
const checkOrderStatus = (0, _checkOrderStatus.default)({
  paymentGateWay: _paypalGateway.default,
  orderModel: _models.orderModel,
  now: _helpers.now
});
const orderServices = Object.freeze({
  createOrder,
  checkOrderStatus
});
var _default = orderServices;
exports.default = _default;