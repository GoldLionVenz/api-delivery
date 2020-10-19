export default function makeGetOrders(getOrdersServices) {
  return async function getOrders(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const orderInfo = httpRequest.body;
      const response = await getOrdersServices({
        user: httpRequest.user,
        ...orderInfo,
      });

      return {
        headers,
        statusCode: 200,
        body: response,
      };
    } catch (e) {
      console.log(e);
      return {
        headers,
        statusCode: 400,
        body: {
          error: e,
        },
      };
    }
  };
}
