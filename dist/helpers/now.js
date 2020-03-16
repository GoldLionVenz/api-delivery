"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = now;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function now(date) {
  if (date) {
    return (0, _moment.default)(date).format("YYYY-MM-DDTHH:mm:ss");
  }

  return (0, _moment.default)().format("YYYY-MM-DDTHH:mm:ss");
}