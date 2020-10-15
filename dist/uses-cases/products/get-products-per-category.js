"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeGetProductsPerCategory;

function makeGetProductsPerCategory({
  productModel
}) {
  return async function getProductsPerCategory({ ...productsInfo
  } = {}) {
    const result = await productModel.paginate({
      category: productsInfo.category
    }, {
      page: productsInfo.page,
      limit: productsInfo.limit,
      sort: {
        created_at: "desc"
      }
    });
    return result;
  };
}