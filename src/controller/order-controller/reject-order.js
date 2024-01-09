export default function makeRejectOrder(rejectService) {
  return async function rejectOrder(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    }
    try {
      const response = await rejectService({
        orderId: httpRequest.body.orderId,
        admin: httpRequest.user
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
