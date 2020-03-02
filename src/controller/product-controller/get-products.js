export default function makeGetProducts(getProductsService) {
  return async function getProducts(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    };
    try {
      const productsInfo = httpRequest.body;
      const response = await getProductsService({
        ...productsInfo
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
