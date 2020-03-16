export default function makeCheckOrderStatus({
  paymentGateWay,
  orderModel,
  now
}) {
  return async function checkOrderStatus({ orderId, paymentRequest } = {}) {
    const payment = await paymentGateWay.getPayment(paymentRequest.paymentId);
    const excecuteData = {
      payer_id: paymentRequest.PayerID,
      transactions: payment.transactions
    };

    const execute = await paymentGateWay.executePayment(
      paymentRequest.paymentId,
      excecuteData
    );
    if (execute.state === "approved") {
      await orderModel.updateOne(
        {
          _id: orderId
        },
        {
          $set: {
            status: "approved",
            payment: {
              ref: paymentRequest.paymentId,
              date: now(),
              payer: payment.payer
            },
            updated_at: now()
          }
        }
      );

      return {
        message: "Pago aprobado"
      };
    }
    await orderModel.updateOne(
      {
        _id: orderId
      },
      {
        $set: {
          status: execute.state,
          updated_at: now()
        }
      }
    );
    throw { message: "Pago rechazado" };
  };
}
