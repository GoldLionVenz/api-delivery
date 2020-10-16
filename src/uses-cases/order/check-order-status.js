export default function makeCheckOrderStatus({
  paymentGateWay,
  orderModel,
  shoppingCartModel,
  now
}) {
  return async function checkOrderStatus({ user, ...orderInfo } = {}) {
    console.log(user)
    const payment = await paymentGateWay.executeOrder(orderInfo.paymentId);
    console.log(payment)
    if (payment.status === "COMPLETED") {
      await shoppingCartModel.updateOne(
          { user: user._id },
          {
            $set: {
              items: []
            }
          }
      );
      await orderModel.updateOne(
        {
          _id: orderInfo.orderId
        },
        {
          $set: {
            status: "approved",
            payment: {
              ref: orderInfo.paymentId,
              date: now(),
              payer: payment.payer
            },
            updated_at: now()
          }
        }
      );

      return {
        message: "Pago aprobado",
        ...orderInfo
      };
    }
    await orderModel.updateOne(
      {
        _id: orderId
      },
      {
        $set: {
          status: payment.status,
          updated_at: now()
        }
      }
    );
    throw { message: "Pago rechazado", ...orderInfo };
  };
}
