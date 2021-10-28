const { Router } = require("express");
const router = Router();
let Contenedor = require("../controller/contenedor");

let data = [
  {
    id: 1,
    title: "Pelota de Fútbol",
    price: 1500,
    thumbnail:
      "https://redsport.vteximg.com.br/arquivos/ids/939668-1000-1000/GA025330771.jpg?v=636967276871130000",
  },

  {
    id: 2,
    title: "Pelota de Básquet",
    price: 2400,
    thumbnail:
      "  https://http2.mlstatic.com/D_NQ_NP_2X_779325-MLA41541350597_042020-F.webp",
  },
];

let datosProductos = new Contenedor(data);

function serverRouter(app) {
  app.use("/api/productos", router);

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
