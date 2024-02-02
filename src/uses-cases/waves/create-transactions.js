export default function makeCreateTransaction({ transfer, broadcast, normalizeNumber }) {
  return async function createTransaction({ amount, privateKey, recipient, sender }) {
    let signedTx
    if (sender === "owner") {
      const fee = parseInt(process.env.WAVES_FEE)
      signedTx = transfer(
        {
          fee: fee,
          amount: amount,
          assetId: process.env.WAVES_ASSET_ID_TEST,
          recipient
        },
        {
          privateKey: process.env.WAVES_OWNER_PRIVATE_KEY
        }
      )
    } else {
      const feeTransaction = Math.ceil((normalizeNumber(5) * amount) / 100)
      const fee = parseInt(feeTransaction) < 5 ? 5 : parseInt(feeTransaction)
      signedTx = transfer(
        {
          fee,
          amount: amount - fee,
          assetId: process.env.WAVES_ASSET_ID_TEST,
          feeAssetId: process.env.WAVES_ASSET_ID_TEST,
          recipient: process.env.WAVES_OWNER_WALLET_TEST
        },
        {
          privateKey
        }
      )
    }
    return await broadcast(signedTx, process.env.WAVES_NODE_IP_TEST)
  }
}
