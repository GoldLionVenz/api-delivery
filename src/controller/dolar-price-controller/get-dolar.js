export default function makeGetDolar(getDolarServices) {
  return async function getDolar() {
    const headers = {
      "Content-Type": "application/json"
    }
    try {
      const response = await getDolarServices()

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
