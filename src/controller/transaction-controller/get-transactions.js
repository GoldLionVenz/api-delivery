export default function makeGetTransactions(getService) {
  return async function getTransactions(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    }
    try {
      const transactionsInfo = httpRequest.body
      const response = await getService({
        user: httpRequest.user,
        ...transactionsInfo
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
          error: e.message
        }
      }
    }
  }
}
