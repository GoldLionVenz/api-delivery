export default function makeAddProduct(addService) {
    return async function addProduct(httpRequest) {
      const headers = {
        "Content-Type": "application/json"
      };
      try {
        const productInfo = httpRequest.body
        const response = await addService({
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
  