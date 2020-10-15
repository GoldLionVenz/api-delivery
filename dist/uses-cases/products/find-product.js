"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeFindProduct;

function makeFindProduct({
  productModel
}) {
  return async function findProduct({
    _id
  } = {}) {
    const product = await productModel.findById(_id);

    if (!product) {
      throw {
        message: "product not found"
      };
    }

    return product;
  };
}