const express = require("express");
const moment = require("moment");
const PORT = 3000;
let app = express();
let counterPage = 0;

app.get("/", (req, res, next) => {
  let response = `<h1 style="color:blue;font-family:'Roboto';font-size:35pt;">Bienvenidos al servidor express</h1>`;
  res.send(response);
});

app.get("/visitas", (req, res, next) => {
  counterPage++;
  res.send(`Esta pagina ha tenido ${counterPage} visitas`);
});

app.get("/fyh", (req, res, next) => {
  res.json({ fyh: moment().format("YYYY-MM-DD HH:MM:SS").toString() });
});

app.listen(PORT, () => {
  console.log(`Estamos conectados a http://localhost:${PORT}`);
});

app.on("error", (err) =>
  console.log("Fallo nuestra conexion al servidor", err)
);
