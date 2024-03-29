export default function makeAddUser(addService) {
    return async function addUser(httpRequest) {
      const headers = {
        "Content-Type": "application/json"
      };
      try {
        const userInfo= httpRequest.body
        const response = await addService({
          ...userInfo
        });
  
        return {
          headers,
          statusCode: 200,
          body: response
        };
      } catch (e) {
        console.log(e)
        return {
          headers,
          statusCode: 400,
          body: {
            error: e.message
          }
        };
      }
    };
  }
  