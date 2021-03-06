export default function makeCheckOrderStatus(stausPaymentServices) {
  return async function checkOrder(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    };
    try {
      const orderInfo = httpRequest.body;
      const response = await stausPaymentServices({
        user: httpRequest.user,
        ...orderInfo
      });

      return {
        headers,
        statusCode: 200,
        body: response
      };
    } catch (e) {
      console.log(e)
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
