import makeAddProductShoppingCart from "./add-product";
import makeGetProductShoppingCart from "./get-shopping-cart";
import makeRemoveProductShoppingCart from "./remove-item";
import { shoppingCartModel, productModel } from "../../models";
import { getShoppingCartResponse } from "../../helpers";
const addProductShoppingCart = makeAddProductShoppingCart({
  shoppingCartModel,
  productModel,
  getShoppingCartResponse
});
const getProductShoppingCart = makeGetProductShoppingCart({
  shoppingCartModel,
  getShoppingCartResponse
});
const removeProductShoppingCart = makeRemoveProductShoppingCart ({
  shoppingCartModel,
  getShoppingCartResponse
});
const shoppingCartServices = Object.freeze({
  addProductShoppingCart,
  getProductShoppingCart,
  removeProductShoppingCart
});

export default shoppingCartServices;
