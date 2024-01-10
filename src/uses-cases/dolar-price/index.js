import { dolarPriceModel } from "../../models"
import makeGetDolar from "./get-dolar"
import makeConfigDolar from "./config-dolar"

const getDolar = makeGetDolar({ dolarPriceModel })
const configDolar = makeConfigDolar({ dolarPriceModel })

const dolarPriceServices = Object.freeze({
  getDolar,
  configDolar
})

export default dolarPriceServices
