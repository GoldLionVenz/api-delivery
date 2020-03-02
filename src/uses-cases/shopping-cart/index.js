import makeAddProductShoppingCart from "./add-product";
import makeGetProductShoppingCart from "./get-shopping-cart";
import { shoppingCartModel } from "../../models";

const addProductShoppingCart = makeAddProductShoppingCart({
  shoppingCartModel
});
const getProductShoppingCart = makeGetProductShoppingCart({
  shoppingCartModel
});
const shoppingCartServices = Object.freeze({
  addProductShoppingCart,
  getProductShoppingCart
});

export default shoppingCartServices;
