"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeRemoveProductShoppingCart;

function makeRemoveProductShoppingCart(removeService) {
  return async function removeProductShoppingCart(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    };

    try {
      const productInfo = httpRequest.body;
      const response = await removeService({
        user: httpRequest.user,
        ...productInfo
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