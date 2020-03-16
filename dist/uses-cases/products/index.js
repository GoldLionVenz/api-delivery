"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _addProducts = _interopRequireDefault(require("./add-products"));

var _findProduct = _interopRequireDefault(require("./find-product"));

var _getProducts = _interopRequireDefault(require("./get-products"));

var _findProducts = _interopRequireDefault(require("./find-products"));

var _models = require("../../models");

var _helpers = require("../../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const addProduct = (0, _addProducts.default)({
  productModel: _models.productModel,
  now: _helpers.now
});
const findProduct = (0, _findProduct.default)({
  productModel: _models.productModel
});
const getProducts = (0, _getProducts.default)({
  productModel: _models.productModel
});
const findProducts = (0, _findProducts.default)({
  productModel: _models.productModel
});
const productServices = Object.freeze({
  addProduct,
  findProduct,
  getProducts,
  findProducts
});
var _default = productServices;
exports.default = _default;