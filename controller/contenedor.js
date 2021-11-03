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
    const updateProductById = (arr, viejo, nuevo) => {
      let i = arr.indexOf(viejo);
      i !== -1 && arr.splice(i, 1, nuevo);
    };

    if (buscandoPorId) {
      let productoActualizado = { id, ...cuerpo };
      return (
        updateProductById(this.productos, buscandoPorId, productoActualizado),
        this.productos
      );
    } else {
      return `No existe un producto con ID: ${id}`;
    }
  }
  deleteProduct(id) {
    let buscandoPorId = this.productos.find((element) => element.id == id);
    const removeItemById = (arr, item) => {
      let i = arr.indexOf(item);
      i !== -1 && arr.splice(i, 1);
    };

    if (buscandoPorId) {
      return removeItemById(this.productos, buscandoPorId), this.productos;
    } else {
      return `No existe un producto con ID: ${id}`;
    }
  }
}

module.exports = Contenedor;
