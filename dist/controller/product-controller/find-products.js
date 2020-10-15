"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeFindProducts;

function makeFindProducts(findService) {
  return async function findProducts(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    };

    try {
      const productsInfo = httpRequest.body;
      const response = await findService({ ...productsInfo
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