import makeCreateOrder from "./create-order";
import makeCheckOrderStatus from "./check-order-status";
import { orderServices } from "../../uses-cases";

const createOrder = makeCreateOrder(orderServices.createOrder);
const checkOrderStatus = makeCheckOrderStatus(orderServices.checkOrderStatus);
const orderController = {
  createOrder,
  checkOrderStatus
};

export default orderController;
