export default function getShoppingCartResponse(cart) {
  let totalAmount = 0;
  let totalItems = 0;
  console.log(cart)
  cart.items.forEach(item => {
    console.log(item.product)
    totalItems += item.quantity;
    totalAmount += item.quantity * item.product.price;
  });
  return {
    items: cart.items,
    totalAmount,
    totalItems
  };
}
