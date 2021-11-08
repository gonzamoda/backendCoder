const express = require("express");
const app = express();
const moment = require("moment");

const { Server: IOServer } = require("socket.io");
const { Server: HttpServer } = require("http");

const cors = require("cors");
const serverRoutes = require("./routes");
const path = require("path");
const PORT = 8080;
const handlebars = require("express-handlebars");
const data = require("./controller/data");

let products = data;
const usersMensajes = require("./controller/usersMensajes");

const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.engine(
  "handlebars",
  handlebars({
    extname: "handlebars",
    defaultLayout: "index.handlebars",
    layoutsDir: __dirname + "/public",
    partialsDir: __dirname + "/public/partials/",
  })
);

app.set("views", "./public");
app.set("view engine", "handlebars");

app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res, next) => {
  res.send(true);
});

app.get("/productos", (req, res, next) => {
  res.render("index", data);
});

serverRoutes(app);

io.on("connection", (socket) => {
  console.log("socket connected");
  socket.emit("serverLoadProducts", products);
  socket.on("clientNewProduct", (data) => {
    let generadorID = products[products.length - 1].id + 1;
    const product = {
      title: data.title,
      price: data.price,
      thumbnail: data.thumbnail,
      id: generadorID,
    };
    products.push(product);
    io.sockets.emit("serverNewProduct", product);
  });

  socket.emit("serverLoadChats", usersMensajes);
  socket.on("clientNewChat", (data) => {
    const mensaje = {
      email: data.email,
      mensaje: data.mensaje,
      hora: moment().format("MMM Do YY, h:mm:ss a"),
    };
    usersMensajes.push(mensaje);
    io.sockets.emit("serverNewChat", mensaje);
  });
});

httpServer.listen(PORT, () => {
  console.log("conectado al servidor ", PORT);
});
