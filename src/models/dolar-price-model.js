export default function makeDolarPriceModel({ Schema, Model }) {
  const dolarPriceSchema = new Schema({
    price: { type: Number }
  })
  return Model("DolarPrice", dolarPriceSchema, "dolarPrice")
}
