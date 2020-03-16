"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeGetProductShoppingCart;

function makeGetProductShoppingCart(getService) {
  return async function getProductShoppingCart(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    };

    try {
      const response = await getService({
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