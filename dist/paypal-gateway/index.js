"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _paypalRestSdk = _interopRequireDefault(require("paypal-rest-sdk"));

var _util = require("util");

var _bluebird = require("bluebird");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_paypalRestSdk.default.configure({
  mode: process && process.env && process.env.PAYPAL_MODE || "sandbox",
  client_id: process && process.env && process.env.PAYPAL_CLIENT_ID || "AXEbUEUWYAZoyn8cJr-rDbgBoZaSPKwx8dTVxQO6CQdxJIqyIjqldU62SafyGjg_XeEtSU4oy-hWI_t9",
  client_secret: process && process.env && process.env.PAYPAL_SECRET || "EIQqjodcHj3dPSJFSy0YM2EcBIJtFPYLvZ3XKF-7R5UacMKzZEruDNhZRb6BllIXPqboIOL-T87PfWAS"
});

exports.createPayment = (0, _util.promisify)(_paypalRestSdk.default.payment.create);
exports.getPayment = (0, _util.promisify)(_paypalRestSdk.default.payment.get);
exports.executePayment = (0, _util.promisify)(_paypalRestSdk.default.payment.execute);

function createPayment(paymentData) {
  return new _bluebird.Promise(function (resolve, reject) {
    _paypalRestSdk.default.payment.create(paymentData, function (error, payment) {
      if (error) reject(error);else resolve(payment);
    });
  });
}

function getPayment(paymentId) {
  return new _bluebird.Promise(function (resolve, reject) {
    _paypalRestSdk.default.payment.get(paymentId, function (error, payment) {
      if (error) reject(error);else resolve(payment);
    });
  });
}

function executePayment(paymentId, paymentData) {
  return new _bluebird.Promise(function (resolve, reject) {
    _paypalRestSdk.default.payment.execute(paymentId, paymentData, function (error, payment) {
      if (error) reject(error);else resolve(payment);
    });
  });
}

const paypalGateWay = Object.freeze({
  createPayment,
  getPayment,
  executePayment
});
var _default = paypalGateWay;
exports.default = _default;