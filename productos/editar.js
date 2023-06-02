const { leerJSON, escribirJSON } = require("../data");
const productos_db = leerJSON();

const editar = function (id) {
  const productosAModificar = productos_db.find(
    (producto) => producto.id === id
  );

  if (!productosAModificar) {
    return `MMMmm, 404 NOT FOUND`;
  }
  const { nombre, marca } = productosAModificar;
  const productosModificados = productos_db.map((producto) => {
    if (producto.id === id) {
      producto.stock = !producto.stock;
    }

    return producto;
  });

  escribirJSON(productosModificados);

  return `El producto "${nombre} | ${marca}"
    se modificó satisfactoriamente`;
};

module.exports = editar;
