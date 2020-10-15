"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeGetProductsPerCategory;

function makeGetProductsPerCategory(getProductsService) {
  return async function getProductsPerCategory(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    };

    try {
      const productsInfo = httpRequest.body;
      const response = await getProductsService({ ...productsInfo
      });
      return {
        headers,
        statusCode: 200,
        body: response
      };
    } catch (e) {
      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message
        }
      };
    }
  };
}