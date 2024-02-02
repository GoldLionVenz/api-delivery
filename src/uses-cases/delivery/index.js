import makeAddDeliveryProcess from "./add-delivery-process"
import makeDeliveryOnTheWay from "./delivery-on-the-way"
import makeDeliveryCompleted from "./delivery-completed"
import { orderModel, transactionModel } from "../../models"
import wavesServices from "../waves"
const addDeliveryProcess = makeAddDeliveryProcess({ orderModel })
const deliveryOnTheWay = makeDeliveryOnTheWay({ orderModel })
const deliveryCompleted = makeDeliveryCompleted({
  orderModel,
  createTransaction: wavesServices.createTransaction,
  transactionModel
})
const deliveryServices = Object.freeze({
  addDeliveryProcess,
  deliveryOnTheWay,
  deliveryCompleted
})

export default deliveryServices
