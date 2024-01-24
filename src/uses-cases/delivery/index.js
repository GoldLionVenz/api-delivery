import makeAddDeliveryProcess from "./add-delivery-process"
import makeDeliveryOnTheWay from "./delivery-on-the-way"
import makeDeliveryCompleted from "./delivery-completed"
import { orderModel } from "../../models"

const addDeliveryProcess = makeAddDeliveryProcess({ orderModel })
const deliveryOnTheWay = makeDeliveryOnTheWay({ orderModel })
const deliveryCompleted = makeDeliveryCompleted({ orderModel })
const deliveryServices = Object.freeze({
  addDeliveryProcess,
  deliveryOnTheWay,
  deliveryCompleted
})

export default deliveryServices
