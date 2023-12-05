const uri = "https://infinite-citadel-83328.herokuapp.com/api/v1"
function formatCurrency(value) {
  let amount = value.split(".")
  return `${new Intl.NumberFormat("de-DE").format(amount[0])},${amount[1]}`
}
const url_string = window.location.href
const url = new URL(url_string)
const token = url.searchParams.get("token")
const button = url.searchParams.get("button")
const shippingName = url.searchParams.get("name")
const shippingAdrress = url.searchParams.get("address")
getShoppingCart({ token, shippingName, shippingAdrress })
async function getShoppingCart({ token, shippingName, shippingAdrress }) {
  window.postMessage(JSON.stringify({ type: "loading", state: { loading: true } }))
  const peticion = await fetch(`${uri}/createorder`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      shipping: {
        name: shippingName,
        address: shippingAdrress
      }
    })
  })
  window.postMessage(JSON.stringify({ type: "loading", state: { loading: false } }))
  const resp = await peticion.json()
  if (peticion.status === 200) {
    document.getElementById("price").innerHTML = `Total a pagar $ ${formatCurrency(
      `${parseFloat(resp.totalAmount).toFixed(2)}`
    )} USD`
  }
  const body = {
    intent: "CAPTURE",
    purchase_units: [
      {
        description: "Stuff",
        amount: {
          value: parseFloat(resp.totalAmount).toFixed(2),
          currency_code: "USD",
          breakdown: {
            item_total: {
              currency_code: "USD",
              value: parseFloat(resp.totalAmount).toFixed(2)
            }
          }
        },
        items: resp.items
      }
    ],
    application_context: {
      return_url: `http://localhost:8000/api/v1/paypalredit/`,
      cancel_url: `http://localhost:8000/api/v1/paypalredit/`,
      shipping_preference: "GET_FROM_FILE"
    }
  }
  paypal
    .Buttons({
      fundingSource: button === "paypal" ? paypal.FUNDING.PAYPAL : paypal.FUNDING.CARD,
      // Set up the transaction
      createOrder: function(data, actions) {
        return actions.order.create(body)
      },

      // Finalize the transaction
      onApprove: async function(data, actions) {
        //const order = await actions.order.capture();
        console.log(data)
        window.postMessage(JSON.stringify({ type: "loading", state: { loading: true } }))
        const peticion = await fetch(`${uri}/paypalredit`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            orderId: resp.orderId,
            paymentId: data.orderID
          })
        })
        const respuesta = await peticion.json()
        console.log(respuesta)
        window.postMessage(JSON.stringify({ type: "loading", state: { loading: false } }))
        window.postMessage(
          JSON.stringify({ type: "response", status: peticion.status, state: resp })
        )
        //return actions.order.capture().then(function(details) {
        //  console.log(details);
        //  // Show a success message to the buyer
        //});
      },
      onError: function(err) {
        console.log(err)
        window.postMessage(
          JSON.stringify({
            type: "response",
            status: 400,
            state: { error: { message: err } }
          })
        )
      }
    })
    .render("#paypal-button-container")
}
