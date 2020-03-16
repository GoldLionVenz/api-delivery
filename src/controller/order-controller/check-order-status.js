export default function makeCheckOrderStatus(stausPaymentServices) {
  return async function checkOrder(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    };
    try {
      const orderId = httpRequest.params.orderId;
      const response = await stausPaymentServices({
        orderId,
        paymentRequest: httpRequest.query
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
