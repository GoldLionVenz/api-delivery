export default function makeAddCategory(addService) {
  return async function addCategory(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    }
    try {
      const categoriesInfo = httpRequest.body
      const response = await addService({
        ...categoriesInfo
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
