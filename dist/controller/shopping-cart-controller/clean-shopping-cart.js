"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeCleanProductShoppingCart;

function makeCleanProductShoppingCart(cleanService) {
  return async function cleanProductShoppingCart(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    };

    try {
      const response = await cleanService({
        user: httpRequest.user
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