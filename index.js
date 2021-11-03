const express = require("express");
const app = express();
const cors = require("cors");
const serverRoutes = require("./routes");
const path = require("path");
const PORT = 8080;
const handlebars = require("express-handlebars");
const data = require("./controller/data");
let ejs = require("ejs");

app.use(express.static("public"));

app.use("/html", express.static(path.join(__dirname, "views")));

//Handlebars
// app.engine(
//   "handlebars",
//   handlebars({
//     extname: "handlebars",
//     defaultLayout: "home.handlebars",
//     layoutsDir: __dirname + "/views/layouts",
//     partialsDir: __dirname + "/views/partials/",
//   })
// );
// app.set("views", "./views/layouts");
// app.set("view engine", "handlebars");

//Pug
// app.set("views", path.join(__dirname, "views", "layouts"));
// app.set("view engine", "pug");

//Ejs
app.set("views", path.join(__dirname, "views", "layouts"));
app.set("view engine", "ejs");

app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  console.log("En la raiz del server");
  res.send(true);
});

//Handlebars
// app.get("/productos", (req, res, next) => {
//   res.render("home", data);
// });

//Pug
// app.get("/productos", (req, res, next) => {
//   res.render("home", { data });
// });

//EJS
app.get("/productos", (req, res, next) => {
  res.render("home", { data });
});

serverRoutes(app);

app.listen(PORT, () => {
  console.log("conectado al servidor ", PORT);
});
