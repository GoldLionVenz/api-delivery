export default function makeFindProduct(findService) {
  return async function findProduct(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    };
    try {
      const _id = httpRequest.body.id;
      const response = await findService({
        _id
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
