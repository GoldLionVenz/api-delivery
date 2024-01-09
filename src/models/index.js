import makeUserModel from "./user-model"
import makeShoppingCartModel from "./shopping-cart-model"
import makeProductModel from "./product-model"
import makeOrderModel from "./order-model"
import mongoose from "mongoose"
import mongoosePaginate from "mongoose-paginate-v2"
import bcrypt from "bcryptjs"
import makeDolarPriceModel from "./dolar-price-model"
console.log(process.env.DB_URL)
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true
})

const productModel = makeProductModel({
  Schema: mongoose.Schema,
  Model: mongoose.model,
  plugins: mongoosePaginate
})
const orderModel = makeOrderModel({
  Schema: mongoose.Schema,
  Model: mongoose.model,
  plugins: mongoosePaginate
})
const userModel = makeUserModel({
  Schema: mongoose.Schema,
  Model: mongoose.model,
  plugins: mongoosePaginate,
  encryptPassword: bcrypt
})

const shoppingCartModel = makeShoppingCartModel({
  Schema: mongoose.Schema,
  Model: mongoose.model
})
const dolarPriceModel = makeDolarPriceModel({
  Schema: mongoose.Schema,
  Model: mongoose.model
})
export { userModel, shoppingCartModel, orderModel, productModel, dolarPriceModel }
