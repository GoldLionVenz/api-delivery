export default function makeConfigDolar({ dolarPriceModel }) {
  return async function configDolar({ ...configRequest } = {}) {
    if (!configRequest.price || configRequest.price === "") {
      throw { message: "Ingrese el monto" }
    }
    const result = await dolarPriceModel.updateOne(
      {},
      {
        $set: {
          price: configRequest.price
        }
      }
    )
    if (result.n === 0) {
      throw { message: "plancode or pricecode not found" }
    }
    return { message: "Valor dolar actualizado" }
  }
}
