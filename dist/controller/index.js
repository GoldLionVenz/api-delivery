"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "userController", {
  enumerable: true,
  get: function () {
    return _usersController.default;
  }
});
Object.defineProperty(exports, "productController", {
  enumerable: true,
  get: function () {
    return _productController.default;
  }
});
Object.defineProperty(exports, "shoppingCartController", {
  enumerable: true,
  get: function () {
    return _shoppingCartController.default;
  }
});

var _usersController = _interopRequireDefault(require("./users-controller"));

var _productController = _interopRequireDefault(require("./product-controller"));

var _shoppingCartController = _interopRequireDefault(require("./shopping-cart-controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }