import makeAddDeliveryProcess from "./add-delivery-process"
import { deliveryServices } from "../../uses-cases"
import makeDeliveryComplete from "./delivery-completed"
const addDeliveryProcess = makeAddDeliveryProcess(deliveryServices.addDeliveryProcess)
const deliveryOnTheWay = makeAddDeliveryProcess(deliveryServices.deliveryOnTheWay)
const deliveryComplete = makeDeliveryComplete(deliveryServices.deliveryCompleted)
const deliveryController = Object.freeze({
  addDeliveryProcess,
  deliveryOnTheWay,
  deliveryComplete
})

export default deliveryController
