export default function makeDeliveryComplete(deliverySevices) {
  return async function deliveryComplete(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    }
    try {
      const response = await deliverySevices({
        orderId: httpRequest.query.order
      })

      return {
        headers,
        statusCode: 200,
        body: response
      }
    } catch (e) {
      console.log(e)
      return {
        headers,
        statusCode: 400,
        body: {
          error: e
        }
      }
    }
  }
}
