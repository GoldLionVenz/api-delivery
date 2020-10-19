import makeCreateOrder from "./create-order";
import makeCheckOrderStatus from "./check-order-status";
import makeGetOrder from "./get-order";
import makeGetOrders from "./get-orders";
import { orderServices } from "../../uses-cases";

const createOrder = makeCreateOrder(orderServices.createOrder);
const checkOrderStatus = makeCheckOrderStatus(orderServices.checkOrderStatus);
const getOrder = makeGetOrder(orderServices.getOrder);
const getOrders = makeGetOrders(orderServices.getOrders);
const orderController = {
  createOrder,
  checkOrderStatus,
  getOrder,
  getOrders
};

export default orderController;
