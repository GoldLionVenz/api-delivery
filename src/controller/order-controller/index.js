import makeCreateOrder from "./create-order";
import makeCheckOrderStatus from "./check-order-status";
import makeGetOrder from "./get-order";
import { orderServices } from "../../uses-cases";

const createOrder = makeCreateOrder(orderServices.createOrder);
const checkOrderStatus = makeCheckOrderStatus(orderServices.checkOrderStatus);
const getOrder = makeGetOrder(orderServices.getOrder);
const orderController = {
  createOrder,
  checkOrderStatus,
  getOrder
};

export default orderController;
