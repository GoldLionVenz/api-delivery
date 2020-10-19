export default function makeGenerateToken(generateTokeService) {
  return async function generateToken(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    };
    try {
      const response = await generateTokeService({
        email: httpRequest.body.email
      });

      return {
        headers,
        statusCode: 200,
        body: response
      };
    } catch (e) {
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
