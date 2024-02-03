import makeCreateOrder from "./create-order"
import makeCheckOrderStatus from "./check-order-status"
import makeGetOrder from "./get-order"
import makeGetOrders from "./get-orders"
import { orderServices } from "../../uses-cases"
import makeApproveOrder from "./approve-order"
import makeRejectOrder from "./reject-order"
import makeSendTokens from "./send-tokens"
const createOrder = makeCreateOrder(orderServices.createOrder)
const checkOrderStatus = makeCheckOrderStatus(orderServices.checkOrderStatus)
const getOrder = makeGetOrder(orderServices.getOrder)
const getOrders = makeGetOrders(orderServices.getOrders)
const getOrdersAdmin = makeGetOrders(orderServices.getOrdersAdmin)
const getOrdersDelivery = makeGetOrders(orderServices.getOrdersDelivery)
const approveOrder = makeApproveOrder(orderServices.approveOrder)
const rejectOrder = makeRejectOrder(orderServices.rejectOrder)
const sendTokens = makeSendTokens(orderServices.sendTokens)
const orderController = {
  createOrder,
  checkOrderStatus,
  getOrder,
  getOrders,
  approveOrder,
  rejectOrder,
  getOrdersAdmin,
  getOrdersDelivery,
  sendTokens
}

export default orderController
