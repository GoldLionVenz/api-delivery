import makeAddDeliveryProcess from "./add-delivery-process"
import makeDeliveryOnTheWay from "./delivery-on-the-way"
import { orderModel } from "../../models"

const addDeliveryProcess = makeAddDeliveryProcess({ orderModel })
const deliveryOnTheWay = makeDeliveryOnTheWay({ orderModel })
const deliveryServices = Object.freeze({
  addDeliveryProcess,
  deliveryOnTheWay
})

export default deliveryServices
