export default function makeExecuteOrder({ paypal }) {
  return async function executeOrder(orderId) {
    // This sample uses SandboxEnvironment. In production, use LiveEnvironment
    function environment() {
      let clientId = process.env.PAYPAL_CLIENT_ID;
      let clientSecret = process.env.PAYPAL_SECRET;

      if (process.env.ENVIRONMENT === "Production")
        return new paypal.core.LiveEnvironment(clientId, clientSecret);
      else return new paypal.core.SandboxEnvironment(clientId, clientSecret);
    }
    let client = new paypal.core.PayPalHttpClient(environment());
    let request = new paypal.orders.OrdersCaptureRequest(orderId);
    request.requestBody({});
    // Call API with your client and get a response for your call
    let response = await client.execute(request);
    return response.result;
  };
}
