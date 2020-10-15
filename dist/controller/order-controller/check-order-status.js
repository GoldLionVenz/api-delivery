"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeCheckOrderStatus;

function makeCheckOrderStatus(stausPaymentServices) {
  return async function checkOrder(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    };

    try {
      const orderInfo = httpRequest.body;
      const response = await stausPaymentServices({ ...orderInfo
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
          error: e
        }
      };
    }
  };
}