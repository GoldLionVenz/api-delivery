export default function makeGetOrder(getOrderServices) {
    return async function getOrder(httpRequest) {
      const headers = {
        "Content-Type": "application/json"
      };
      try {
        const orderInfo = httpRequest.body;
        const response = await getOrderServices({
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
  