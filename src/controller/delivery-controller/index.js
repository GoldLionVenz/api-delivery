import makeAddDeliveryProcess from "./add-delivery-process"
import { deliveryServices } from "../../uses-cases"

const addDeliveryProcess = makeAddDeliveryProcess(deliveryServices.addDeliveryProcess)
const deliveryOnTheWay = makeAddDeliveryProcess(deliveryServices.deliveryOnTheWay)
const deliveryController = Object.freeze({
  addDeliveryProcess,
  deliveryOnTheWay
})

export default deliveryController
