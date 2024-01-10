export default function makeGetDolar({ dolarPriceModel }) {
  return async function getDolar() {
    const result = await dolarPriceModel.findOne({})
    return result.toObject()
  }
}
