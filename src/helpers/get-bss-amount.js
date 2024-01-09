import { dolarPriceModel } from "../models"
export default async function getBssAmount(totalAmount) {
  const dolarPrice = await dolarPriceModel.findOne()
  const totalAmountBs = totalAmount * dolarPrice.price
  return parseFloat(parseFloat(parseFloat(totalAmountBs)).toFixed(2))
  //parseFloat(totalAmountBs+(totalAmountBs*0.16)).toFixed(2)
}
