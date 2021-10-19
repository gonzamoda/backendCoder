const express = require("express");
const PORT = 8080;
let app = express();

let Contenedor = require("./contenedor");
let archivoProductos = new Contenedor("productos.txt");

app.get("/", (req, res, next) => {
  let response = `<h1 style="color:blue;font-family:'Roboto';font-size:35pt;">Bienvenidos al servidor express</h1>`;
  res.send(response);
});

app.get("/productos", (req, res, next) => {
  res.send(archivoProductos.getAll());
});

app.get("/productoRandom", (req, res, next) => {
  res.json(archivoProductos.getRandom());
});

app.listen(PORT, () => {
  console.log(`Estamos conectados a http://localhost:${PORT}`);
});

app.on("error", (err) =>
  console.log("Fallo nuestra conexion al servidor", err)
);
