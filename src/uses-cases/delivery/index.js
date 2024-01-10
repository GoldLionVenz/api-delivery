import makeAddDeliveryProcess from "./add-delivery-process"
import { orderModel } from "../../models"

const addDeliveryProcess = makeAddDeliveryProcess({ orderModel })

const deliveryServices = Object.freeze({
  addDeliveryProcess
})

export default deliveryServices
