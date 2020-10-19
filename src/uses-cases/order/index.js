import makeCreateOrder from "./create-order";
import makeCheckOrderStatus from "./check-order-status";
import makeGetOrder from "./get-order";
import makeGetOrders from "./get-orders";
import { now, getShoppingCartResponse } from "../../helpers";
import { shoppingCartModel, orderModel } from "../../models";
import paypalGateWay from "../../paypal-gateway";

const createOrder = makeCreateOrder({
  shoppingCartModel,
  orderModel,
  getShoppingCartResponse,
  now
});

const checkOrderStatus = makeCheckOrderStatus({
  paymentGateWay: paypalGateWay,
  orderModel,
  shoppingCartModel,
  now
});

const getOrder = makeGetOrder({ orderModel });
const getOrders = makeGetOrders({ orderModel })
const orderServices = Object.freeze({
  createOrder,
  checkOrderStatus,
  getOrder,
  getOrders
});

export default orderServices;
