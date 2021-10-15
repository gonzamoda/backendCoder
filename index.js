const express = require("express");
const PORT = 8080;
let app = express();
const fs = require("fs");

class Contenedor {
  constructor(archivo) {
    this.archivo = archivo;
  }

  getAll() {
    app.get("/productos", (req, res, next) => {
      let todosLosProductos = JSON.parse(
        fs.readFileSync(archivoProductos.archivo, "utf-8")
      );
      res.send(todosLosProductos);
    });
  }

  getRandom() {
    app.get("/productoRandom", (req, res, next) => {
      let todosLosProductos = JSON.parse(
        fs.readFileSync(archivoProductos.archivo, "utf-8")
      );
      let productoRandom =
        todosLosProductos[Math.floor(Math.random() * todosLosProductos.length)];
      res.json(productoRandom);
    });
  }
}

const archivoProductos = new Contenedor("productos.txt");

archivoProductos.getAll();
archivoProductos.getRandom();

app.get("/", (req, res, next) => {
  let response = `<h1 style="color:blue;font-family:'Roboto';font-size:35pt;">Bienvenidos al servidor express</h1>`;
  res.send(response);
});

app.listen(PORT, () => {
  console.log(`Estamos conectados a http://localhost:${PORT}`);
});

app.on("error", (err) =>
  console.log("Fallo nuestra conexion al servidor", err)
);
