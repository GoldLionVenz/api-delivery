"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productModel = exports.orderModel = exports.shoppingCartModel = exports.userModel = void 0;

var _userModel = _interopRequireDefault(require("./user-model"));

var _shoppingCartModel = _interopRequireDefault(require("./shopping-cart-model"));

var _productModel = _interopRequireDefault(require("./product-model"));

var _orderModel = _interopRequireDefault(require("./order-model"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _mongoosePaginateV = _interopRequireDefault(require("mongoose-paginate-v2"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose.default.connect(process && process.env && process.env.DB_URL || "mongodb://localhost:27017/delivery", {
  useNewUrlParser: true
});

const productModel = (0, _productModel.default)({
  Schema: _mongoose.default.Schema,
  Model: _mongoose.default.model,
  plugins: _mongoosePaginateV.default
});
exports.productModel = productModel;
const orderModel = (0, _orderModel.default)({
  Schema: _mongoose.default.Schema,
  Model: _mongoose.default.model,
  plugins: _mongoosePaginateV.default
});
exports.orderModel = orderModel;
const userModel = (0, _userModel.default)({
  Schema: _mongoose.default.Schema,
  Model: _mongoose.default.model,
  plugins: _mongoosePaginateV.default,
  encryptPassword: _bcryptjs.default
});
exports.userModel = userModel;
const shoppingCartModel = (0, _shoppingCartModel.default)({
  Schema: _mongoose.default.Schema,
  Model: _mongoose.default.model
});
exports.shoppingCartModel = shoppingCartModel;