"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeProductModel;

function makeProductModel({
  Schema,
  Model,
  plugins
}) {
  const productSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    updated_at: {
      type: String,
      required: true
    },
    created_at: {
      type: String,
      required: true
    }
  });
  productSchema.plugin(plugins);
  return Model("Product", productSchema);
}