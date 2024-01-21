import makeCreateOrder from "./create-order"
import makeCheckOrderStatus from "./check-order-status"
import makeGetOrder from "./get-order"
import makeGetOrders from "./get-orders"
import { orderServices } from "../../uses-cases"
import makeApproveOrder from "./approve-order"
import makeRejectOrder from "./reject-order"
const createOrder = makeCreateOrder(orderServices.createOrder)
const checkOrderStatus = makeCheckOrderStatus(orderServices.checkOrderStatus)
const getOrder = makeGetOrder(orderServices.getOrder)
const getOrders = makeGetOrders(orderServices.getOrders)
const getOrdersAdmin = makeGetOrders(orderServices.getOrdersAdmin)
const approveOrder = makeApproveOrder(orderServices.approveOrder)
const rejectOrder = makeRejectOrder(orderServices.rejectOrder)
const orderController = {
  createOrder,
  checkOrderStatus,
  getOrder,
  getOrders,
  approveOrder,
  rejectOrder,
  getOrdersAdmin
}

export default orderController
