"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeOrderModel;

function makeOrderModel({
  Schema,
  Model,
  plugins
}) {
  const orderSchema = new Schema({
    products: {
      type: [{}],
      required: true
    },
    payment: {
      type: Object
    },
    shipping: {
      type: Object,
      required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    updated_at: {
      type: String,
      required: true
    },
    created_at: {
      type: String,
      required: true
    },
    totalAmount: {
      type: Number,
      required: true
    }
  });
  orderSchema.plugin(plugins);
  return Model("Order", orderSchema);
}