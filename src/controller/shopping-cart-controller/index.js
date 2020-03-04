import makeAddProductShoppingCart from "./add-product";
import makeGetProductShoppingCart from "./get-shopping-cart";
import makeRemoveProductShoppingCart from "./remove-product";
import makeIncrementProductShoppingCart from "./increment-product";
import makeDecrementProductShoppingCart from "./decrement-product";
import { shoppingCartServices } from "../../uses-cases";

const addProductShoppingCart = makeAddProductShoppingCart(
  shoppingCartServices.addProductShoppingCart
);
const getProductShoppingCart = makeGetProductShoppingCart(
  shoppingCartServices.getProductShoppingCart
);
const removeProductShoppingCart = makeRemoveProductShoppingCart(
  shoppingCartServices.removeProductShoppingCart
);
const incrementProductShoppingCart = makeIncrementProductShoppingCart(
  shoppingCartServices.incrementProductShoppingCart
);
const decrementProductShoppingCart = makeDecrementProductShoppingCart(
  shoppingCartServices.decrementProductShoppingCart
);
const shoppingCartController = {
  addProductShoppingCart,
  getProductShoppingCart,
  removeProductShoppingCart,
  incrementProductShoppingCart,
  decrementProductShoppingCart
};

export default shoppingCartController;
