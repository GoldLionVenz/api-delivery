export default function makeGetCategories(getCategoriesService) {
  return async function getProducts() {
    const headers = {
      "Content-Type": "application/json"
    };
    try {
      const response = await getCategoriesService();

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
