export default function makeGetOrder(getOrderServices) {
  return async function getOrder(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    }
    try {
      const response = await getOrderServices({
        orderId: httpRequest.params._id
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
