"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeFindProducts;

function makeFindProducts({
  productModel
}) {
  return async function findProducts({ ...productsInfo
  } = {}) {
    const result = await productModel.paginate({
      $or: [{
        name: {
          $regex: productsInfo.query,
          $options: "i"
        }
      }, {
        description: {
          $regex: productsInfo.query,
          $options: "i"
        }
      }]
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