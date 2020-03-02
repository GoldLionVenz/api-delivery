import makeAddProductShoppingCart from "./add-product";
import makeGetProductShoppingCart from "./get-shopping-cart";
import { shoppingCartServices } from "../../uses-cases";

const addProductShoppingCart = makeAddProductShoppingCart(
  shoppingCartServices.addProductShoppingCart
);
const getProductShoppingCart = makeGetProductShoppingCart(
  shoppingCartServices.getProductShoppingCart
);
const shoppingCartController = {
  addProductShoppingCart,
  getProductShoppingCart
};

export default shoppingCartController;
