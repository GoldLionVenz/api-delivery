export default function makeDecrementProductShoppingCart(decrementService) {
  return async function decrementProductShoppingCart(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    };
    try {
      const productInfo = httpRequest.body;
      const response = await decrementService({
        user: httpRequest.user,
        ...productInfo
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
          error: e.message
        }
      };
    }
  };
}
