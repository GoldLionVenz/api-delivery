export default function makeSendTokens(sendServices) {
  return async function sendTokens(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    }
    try {
      const response = await sendServices({
        ...httpRequest.body
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
