import makeAddProductShoppingCart from "./add-product";
import makeGetProductShoppingCart from "./get-shopping-cart";
import makeRemoveProductShoppingCart from "./remove-product";
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
const shoppingCartController = {
  addProductShoppingCart,
  getProductShoppingCart,
  removeProductShoppingCart
};

export default shoppingCartController;
