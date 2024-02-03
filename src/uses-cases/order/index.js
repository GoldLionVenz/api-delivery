import makeCreateOrder from "./create-order"
import makeCheckOrderStatus from "./check-order-status"
import makeGetOrder from "./get-order"
import makeGetOrders from "./get-orders"
import { now, getShoppingCartResponse, getBssAmount } from "../../helpers"
import { shoppingCartModel, orderModel, transactionModel, userModel } from "../../models"
import paypalGateWay from "../../paypal-gateway"
import makeApproveOrder from "./approve-order"
import makeRejectOrder from "./reject-order"
import makeGetOrdersAdmin from "./get-orders-admin"
import makeGetOrdersDelivery from "./get-orders-delivery"
import wavesServices from "../waves"
import makeSendTokens from "./send-tokens"
const createOrder = makeCreateOrder({
  shoppingCartModel,
  orderModel,
  getShoppingCartResponse,
  now,
  getBssAmount,
  createTransaction: wavesServices.createTransaction,
  getBalance: wavesServices.getBalance,
  transactionModel
})

const checkOrderStatus = makeCheckOrderStatus({
  paymentGateWay: paypalGateWay,
  orderModel,
  shoppingCartModel,
  now
})

const getOrder = makeGetOrder({ orderModel, getBssAmount })
const getOrders = makeGetOrders({ orderModel })
const approveOrder = makeApproveOrder({ orderModel })
const rejectOrder = makeRejectOrder({ orderModel })
const getOrdersAdmin = makeGetOrdersAdmin({ orderModel })
const getOrdersDelivery = makeGetOrdersDelivery({ orderModel })
const sendTokens = makeSendTokens({ userModel, createTransaction: wavesServices.createTransaction, transactionModel })
const orderServices = Object.freeze({
  createOrder,
  checkOrderStatus,
  getOrder,
  getOrders,
  approveOrder,
  rejectOrder,
  getOrdersAdmin,
  getOrdersDelivery,
  sendTokens
})

export default orderServices
