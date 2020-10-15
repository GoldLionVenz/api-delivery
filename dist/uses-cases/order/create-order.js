"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeCreateOrder;

function makeCreateOrder({
  shoppingCartModel,
  orderModel,
  getShoppingCartResponse,
  paymentGateWay,
  now
}) {
  return async function createOrder({
    user,
    ...orderInfo
  } = {}) {
    let cart = await shoppingCartModel.findOne({
      user: user._id
    }).populate("items.product");

    if (!cart) {
      throw {
        message: "shooping cart not found"
      };
    }

    cart = getShoppingCartResponse(cart); //await shoppingCartModel.updateOne(
    //    { user: user._id },
    //    {
    //      $set: {
    //        items: []
    //      }
    //    }
    //);
    //const itemsOrder = [];
    //itemsOrder=cart.items.forEach(item=>{
    //    itemsOrder.push({
    //        quantity:item.quantity,
    //        product:item.product
    //    })
    //})

    const itemsOrder = cart.items.map(item => {
      return {
        quantity: item.quantity,
        product: item.product
      };
    });
    const order = await orderModel.create({
      user: user._id,
      shipping: orderInfo.shipping,
      updated_at: now(),
      created_at: now(),
      totalAmount: cart.totalAmount,
      products: itemsOrder,
      status: "in_process"
    }); //const items = [];
    //order.products.forEach(product => {
    //  items.push({
    //    name: product.product.name,
    //    price: `${product.product.price}.00`,
    //    currency: "USD",
    //    quantity: product.quantity
    //  });
    //});

    const items = order.products.map(product => {
      return {
        name: product.product.name,
        unit_amount: {
          currency_code: "USD",
          value: `${product.product.price}.00`
        },
        quantity: product.quantity
      };
    });
    /*const create_payment_json = {
      intent: "sale",
      payer: {
        payment_method: "paypal"
      },
      redirect_urls: {
        return_url: `${process.env.URL}/api/v1/paypalredit/${order._id}`,
        cancel_url: `${process.env.URL}/api/v1/paypalredit/${order._id}`
      },
      transactions: [
        {
          item_list: {
            items: items
          },
          amount: {
            currency: "USD",
            total: `${order.totalAmount}.00`
          },
          description: "Delivery App"
        }
      ]
    };
    const payment = await paymentGateWay.createPayment(create_payment_json);
    let url = "";
    payment.links.forEach(link => {
      if (link.rel === "approval_url") {
        url = link.href;
      }
    });*/

    return {
      items,
      orderId: order._id,
      totalAmount: `${order.totalAmount}.00`
    };
  };
}