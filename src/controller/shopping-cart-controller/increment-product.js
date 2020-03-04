export default function makeIncrementProductShoppingCart(incrementService) {
  return async function incrementProductShoppingCart(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    };
    try {
      const productInfo = httpRequest.body;
      const response = await incrementService({
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
