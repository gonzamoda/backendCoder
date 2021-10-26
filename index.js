const express = require("express");
const app = express();
const cors = require("cors");
const serverRoutes = require("./routes");
const path = require("path");
const PORT = 8080;

app.use("/static2", express.static(path.join(__dirname, "uploads")));
app.use("/html", express.static(path.join(__dirname, "views")));

app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  console.log("En la raiz del server");
  res.send(true);
});

serverRoutes(app);

app.listen(PORT, () => {
  console.log("conectado al servidor ", PORT);
});
