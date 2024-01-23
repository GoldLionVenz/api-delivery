import makeAddDeliveryProcess from "./add-delivery-process"
import { deliveryServices } from "../../uses-cases"

const addDeliveryProcess = makeAddDeliveryProcess(deliveryServices.addDeliveryProcess)

const deliveryController = Object.freeze({
  addDeliveryProcess
})

export default deliveryController
