const fs = require("fs");

class Contenedor {
  constructor(archivo) {
    this.archivo = archivo;
  }

  getAll() {
    try {
      let dataActualizada = JSON.parse(fs.readFileSync(this.archivo, "utf-8"));
      return dataActualizada;
    } catch (error) {
      console.log("No se pudo obtener el listado completo", error);
    }
  }

  getRandom() {
    try {
      let todosLosProductos = JSON.parse(
        fs.readFileSync(this.archivo, "utf-8")
      );
      return todosLosProductos[
        Math.floor(Math.random() * todosLosProductos.length)
      ];
    } catch (error) {
      console.log("No se pudo obtener un elemento random", error);
    }
  }
}

module.exports = Contenedor;
