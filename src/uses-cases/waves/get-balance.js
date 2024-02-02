import fetch from "node-fetch"
export default function makeGetBalance() {
  return async function getBalance({ address }) {
    const base = process.env.WAVES_NODE_IP_TEST
    const request = await fetch(`${base}/assets/balance/${address}/${process.env.WAVES_ASSET_ID_TEST}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    const response = await request.json()
    if (request.status !== 200) {
      throw { balance: 0 }
    }
    return {
      balance: response.balance
    }
  }
}
