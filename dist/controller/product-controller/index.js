"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _addProduct = _interopRequireDefault(require("./add-product"));

var _findProduct = _interopRequireDefault(require("./find-product"));

var _getProducts = _interopRequireDefault(require("./get-products"));

var _findProducts = _interopRequireDefault(require("./find-products"));

var _getProductsPerCategory = _interopRequireDefault(require("./get-products-per-category"));

var _usesCases = require("../../uses-cases");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const addProduct = (0, _addProduct.default)(_usesCases.productServices.addProduct);
const findProduct = (0, _findProduct.default)(_usesCases.productServices.findProduct);
const getProducts = (0, _getProducts.default)(_usesCases.productServices.getProducts);
const findProducts = (0, _findProducts.default)(_usesCases.productServices.findProducts);
const getProductsPerCategory = (0, _getProductsPerCategory.default)(_usesCases.productServices.getProductsPerCategory);
const productController = {
  addProduct,
  findProduct,
  getProducts,
  findProducts,
  getProductsPerCategory
};
var _default = productController;
exports.default = _default;