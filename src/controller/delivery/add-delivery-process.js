export default function makeAddDeliveryProcess(deliverySevices) {
  return async function addDeliveryProcess(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    }
    try {
      const response = await deliverySevices({
        deliveryUser: httpRequest.body.deliveryUser,
        orderId: httpRequest.body.orderId
      })

      return {
        headers,
        statusCode: 200,
        body: response
      }
    } catch (e) {
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
