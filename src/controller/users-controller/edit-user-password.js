export default function makeEditUserPassword(editUserPasswordServices) {
  return async function editUserPassword(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const response = await editUserPasswordServices({
        token: httpRequest.body.token,
        password: httpRequest.body.password
      });

      return {
        headers,
        statusCode: 200,
        body: response,
      };
    } catch (e) {
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
