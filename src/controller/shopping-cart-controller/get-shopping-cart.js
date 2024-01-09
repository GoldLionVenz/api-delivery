export default function makeGetProductShoppingCart(getService) {
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
