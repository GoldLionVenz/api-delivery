export default function makeGetCategories() {
  return async function getCategories() {
    return [
      {
        name: "Bebidas"
      },
      {
        name: "Bebidas alcoholicas"
      },
      {
        name: "Viveres"
      },
      {
        name: "Lacteos"
      },
      {
        name: "Carnes y Embutidos"
      },
      {
        name: "Frutas y Verduras"
      },
      {
        name: "Hogar y limpieza"
      },
      {
        name: "Cosmética y Cuidado Personal"
      },
      {
        name: "Dulces"
      }
    ];
  };
}
