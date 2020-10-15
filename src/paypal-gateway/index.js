import paypal from "@paypal/checkout-server-sdk";
import makeExecuteOrder from "./execute-order";

const executeOrder = makeExecuteOrder({ paypal });

const paypalGateWay = Object.freeze({
  executeOrder
});

export default paypalGateWay;
