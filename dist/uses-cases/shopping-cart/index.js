"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _addProduct = _interopRequireDefault(require("./add-product"));

var _getShoppingCart = _interopRequireDefault(require("./get-shopping-cart"));

var _removeItem = _interopRequireDefault(require("./remove-item"));

var _decrementProduct = _interopRequireDefault(require("./decrement-product"));

var _incrementProduct = _interopRequireDefault(require("./increment-product"));

var _cleanShoppingCart = _interopRequireDefault(require("./clean-shopping-cart"));

var _models = require("../../models");

var _helpers = require("../../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const addProductShoppingCart = (0, _addProduct.default)({
  shoppingCartModel: _models.shoppingCartModel,
  productModel: _models.productModel,
  getShoppingCartResponse: _helpers.getShoppingCartResponse
});
const getProductShoppingCart = (0, _getShoppingCart.default)({
  shoppingCartModel: _models.shoppingCartModel,
  getShoppingCartResponse: _helpers.getShoppingCartResponse
});
const removeProductShoppingCart = (0, _removeItem.default)({
  shoppingCartModel: _models.shoppingCartModel,
  getShoppingCartResponse: _helpers.getShoppingCartResponse
});
const decrementProductShoppingCart = (0, _decrementProduct.default)({
  shoppingCartModel: _models.shoppingCartModel,
  getShoppingCartResponse: _helpers.getShoppingCartResponse
});
const incrementProductShoppingCart = (0, _incrementProduct.default)({
  shoppingCartModel: _models.shoppingCartModel,
  getShoppingCartResponse: _helpers.getShoppingCartResponse
});
const cleanShoppingCart = (0, _cleanShoppingCart.default)({
  shoppingCartModel: _models.shoppingCartModel,
  getShoppingCartResponse: _helpers.getShoppingCartResponse
});
const shoppingCartServices = Object.freeze({
  addProductShoppingCart,
  getProductShoppingCart,
  removeProductShoppingCart,
  decrementProductShoppingCart,
  incrementProductShoppingCart,
  cleanShoppingCart
});
var _default = shoppingCartServices;
exports.default = _default;