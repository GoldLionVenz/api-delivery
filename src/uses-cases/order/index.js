import makeCreateOrder from "./create-order"
import makeCheckOrderStatus from "./check-order-status"
import makeGetOrder from "./get-order"
import makeGetOrders from "./get-orders"
import { now, getShoppingCartResponse, getBssAmount } from "../../helpers"
import { shoppingCartModel, orderModel } from "../../models"
import paypalGateWay from "../../paypal-gateway"
import makeApproveOrder from "./approve-order"
import makeRejectOrder from "./reject-order"
const createOrder = makeCreateOrder({
  shoppingCartModel,
  orderModel,
  getShoppingCartResponse,
  now,
  getBssAmount
})

const checkOrderStatus = makeCheckOrderStatus({
  paymentGateWay: paypalGateWay,
  orderModel,
  shoppingCartModel,
  now
})

const getOrder = makeGetOrder({ orderModel })
const getOrders = makeGetOrders({ orderModel })
const approveOrder = makeApproveOrder({ orderModel })
const rejectOrder = makeRejectOrder({ orderModel })
const orderServices = Object.freeze({
  createOrder,
  checkOrderStatus,
  getOrder,
  getOrders,
  approveOrder,
  rejectOrder
})

export default orderServices
