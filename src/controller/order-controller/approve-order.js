export default function makeApproveOrder(approveService) {
  return async function approveOrder(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    }
    try {
      const response = await approveService({
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
