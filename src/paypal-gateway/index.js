import paypal from "paypal-rest-sdk";
import { promisify } from "util";
import { Promise } from "bluebird";
paypal.configure({
  mode: process.env.PAYPAL_MODE,
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_SECRET
});
exports.createPayment = promisify(paypal.payment.create);
exports.getPayment = promisify(paypal.payment.get);
exports.executePayment = promisify(paypal.payment.execute);
function createPayment(paymentData) {
  return new Promise(function(resolve, reject) {
    paypal.payment.create(paymentData, function(error, payment) {
      if (error) reject(error);
      else resolve(payment);
    });
  });
}

function getPayment(paymentId) {
  return new Promise(function(resolve, reject) {
    paypal.payment.get(paymentId, function(error, payment) {
      if (error) reject(error);
      else resolve(payment);
    });
  });
}

function executePayment(paymentId, paymentData) {
  return new Promise(function(resolve, reject) {
    paypal.payment.execute(paymentId, paymentData, function(error, payment) {
      if (error) reject(error);
      else resolve(payment);
    });
  });
}
const paypalGateWay = Object.freeze({
  createPayment,
  getPayment,
  executePayment
});

export default paypalGateWay;