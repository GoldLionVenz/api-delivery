"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeCreateOrder;

function makeCreateOrder(createService) {
  return async function createOrder(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    };

    try {
      const orderInfo = httpRequest.body;
      const response = await createService({
        user: httpRequest.user,
        ...orderInfo
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