export default function makeGetCategory(getService) {
    return async function getCategory(httpRequest) {
      const headers = {
        "Content-Type": "application/json"
      }
      try {
        const categoriesInfo = httpRequest.query
        const response = await getService({
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
  