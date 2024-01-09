export default function makeUpdateUser(updateService) {
  return async function updateUser(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const userInfo = httpRequest.body;
      const response = await updateService({
        user: httpRequest.user,
        ...userInfo,
      });

      return {
        headers,
        statusCode: 200,
        body: response,
      };
    } catch (e) {
      console.log(e)
      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message,
        },
      };
    }
  };
}
