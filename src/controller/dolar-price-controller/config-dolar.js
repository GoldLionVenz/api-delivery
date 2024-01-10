export default function makePutDolar(putDolarServices) {
  return async function putDolar(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    }
    try {
      const configRequest = httpRequest.body
      const response = await putDolarServices({
        ...configRequest
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
