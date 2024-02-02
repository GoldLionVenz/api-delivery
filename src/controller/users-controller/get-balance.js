export default function makeGetBalance(getServices) {
  return async function getBalance(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    }
    try {
      const response = await getServices({
        user: httpRequest.user
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
