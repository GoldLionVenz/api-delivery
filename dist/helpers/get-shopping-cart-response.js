"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getShoppingCartResponse;

function getShoppingCartResponse(cart) {
  let totalAmount = 0;
  let totalItems = 0;
  cart.items.forEach(item => {
    totalItems += item.quantity;
    totalAmount += item.quantity * item.product.price;
  });
  return {
    items: cart.items,
    totalAmount,
    totalItems
  };
}