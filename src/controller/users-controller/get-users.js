export default function makeGetUsers(getServices) {
  return async function getUsers(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    }
    try {
      const usersInfo = httpRequest.query
      const response = await getServices({
        ...usersInfo
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
