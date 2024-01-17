export default function makeAddProductAndImg(addService) {
  return async function addProductAndImg(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    }
    try {
      const productInfo = httpRequest.body
      const files = httpRequest.files
      const response = await addService({
        files,
        ...productInfo
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
