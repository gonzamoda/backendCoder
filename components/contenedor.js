const fs = require("fs");

class Contenedor {
  constructor(productos) {
    this.productos = productos;
  }

  getAll() {
    return this.productos;
  }

  getProductById(id) {
    let buscandoPorId = this.productos.find((element) => element.id == id);
    if (buscandoPorId) {
      return buscandoPorId;
    } else {
      return "No existe un producto con ese ID";
    }
  }
  postProduct(productoNuevo) {
    let generadorID = this.productos[this.productos.length - 1].id + 1;
    let objAdd = { id: generadorID, ...productoNuevo };
    return this.productos.push(objAdd);
  }
  updateProduct(id, cuerpo) {
    let buscandoPorId = this.productos.find((element) => element.id == id);
    if (buscandoPorId) {
      return { id: element.id, ...cuerpo };
    } else {
      return `No existe un producto con ID: ${id}`;
    }
  }
  deleteProduct(id) {
    let buscandoPorId = this.productos.find((element) => element.id == id);
    if (buscandoPorId) {
      return "Producto Eliminado";
    } else {
      return `No existe un producto con ID: ${id}`;
    }
  }
}

module.exports = Contenedor;
