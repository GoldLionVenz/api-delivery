import makeCreateOrder from "./create-order";
import makeCheckOrderStatus from "./check-order-status";
import { now, getShoppingCartResponse } from "../../helpers";
import { shoppingCartModel, orderModel } from "../../models";
import paypalGateWay from "../../paypal-gateway";

const createOrder = makeCreateOrder({
  shoppingCartModel,
  orderModel,
  getShoppingCartResponse,
  paymentGateWay: paypalGateWay,
  now
});

const checkOrderStatus = makeCheckOrderStatus({
  paymentGateWay: paypalGateWay,
  orderModel,
  now
});
const orderServices = Object.freeze({
  createOrder,
  checkOrderStatus
});

export default orderServices;
