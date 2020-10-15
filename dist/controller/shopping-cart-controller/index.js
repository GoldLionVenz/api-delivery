"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _addProduct = _interopRequireDefault(require("./add-product"));

var _getShoppingCart = _interopRequireDefault(require("./get-shopping-cart"));

var _removeProduct = _interopRequireDefault(require("./remove-product"));

var _incrementProduct = _interopRequireDefault(require("./increment-product"));

var _decrementProduct = _interopRequireDefault(require("./decrement-product"));

var _cleanShoppingCart = _interopRequireDefault(require("./clean-shopping-cart"));

var _usesCases = require("../../uses-cases");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const addProductShoppingCart = (0, _addProduct.default)(_usesCases.shoppingCartServices.addProductShoppingCart);
const getProductShoppingCart = (0, _getShoppingCart.default)(_usesCases.shoppingCartServices.getProductShoppingCart);
const removeProductShoppingCart = (0, _removeProduct.default)(_usesCases.shoppingCartServices.removeProductShoppingCart);
const incrementProductShoppingCart = (0, _incrementProduct.default)(_usesCases.shoppingCartServices.incrementProductShoppingCart);
const decrementProductShoppingCart = (0, _decrementProduct.default)(_usesCases.shoppingCartServices.decrementProductShoppingCart);
const cleanProductShoppingCart = (0, _cleanShoppingCart.default)(_usesCases.shoppingCartServices.cleanShoppingCart);
const shoppingCartController = {
  addProductShoppingCart,
  getProductShoppingCart,
  removeProductShoppingCart,
  incrementProductShoppingCart,
  decrementProductShoppingCart,
  cleanProductShoppingCart
};
var _default = shoppingCartController;
exports.default = _default;