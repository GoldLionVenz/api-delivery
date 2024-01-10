import { dolarPriceServices } from "../../uses-cases"
import makeGetDolar from "./get-dolar"
import makePutDolar from "./config-dolar"
const getDolar = makeGetDolar(dolarPriceServices.getDolar)
const putDolar = makePutDolar(dolarPriceServices.configDolar)
const dolarPriceController = Object.freeze({
  getDolar,
  putDolar
})

export default dolarPriceController
