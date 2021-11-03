const { Router } = require("express");
const router = Router();
const datosProductos = require("../controller/nuevoContenedor");

function serverRouter(app) {
  app.use("/productos", router);

  router.get("/", (req, res, next) => {
    res.json(datosProductos.getAll());
  });

  router.get("/:id", (req, res, next) => {
    res.json(datosProductos.getProductById(req.params.id));
  });

  router.post("/", (req, res) => {
    res.json(datosProductos.postProduct(req.body));
  });

  router.put("/:id", (req, res) => {
    res.json(datosProductos.updateProduct(req.params.id, req.body));
  });

  router.delete("/:id", (req, res) => {
    res.json(datosProductos.deleteProduct(req.params.id));
  });
}

module.exports = serverRouter;
