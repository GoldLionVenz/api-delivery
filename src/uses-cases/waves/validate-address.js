import fetch from "node-fetch"
export default function makeValidateAddress() {
  return async function validateAddress({ address }) {
    const base = process.env.NODE_ENV === "Production" ? process.env.WAVES_NODE_IP : process.env.WAVES_NODE_IP_TEST
    const request = await fetch(`${base}/addresses/validate/${address}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    const response = await request.json()

    return {
      status: request.status,
      response
    }
  }
}
