const { Router } = require("express");
const router = Router();

let datosProductos = [
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

function serverRouter(app) {
  app.use("/api/productos", router);

  router.get("/", (req, res, next) => {
    res.json(datosProductos);
  });

  router.get("/:id", (req, res, next) => {
    let buscandoPorId = datosProductos.find(
      (element) => element.id == req.params.id
    );
    if (buscandoPorId) {
      response = buscandoPorId;
    } else {
      response = "No existe un producto con ese ID";
    }

    res.json(response);
  });

  router.post("/", (req, res) => {
    generadorID = datosProductos[datosProductos.length - 1].id + 1;
    let objAdd = { id: generadorID, ...req.body };
    res.json(datosProductos.push(objAdd));
  });

  router.put("/:id", (req, res) => {
    let buscandoPorId = datosProductos.find(
      (element) => element.id == req.params.id
    );
    if (buscandoPorId) {
      response = { id: element.id, ...req.body };
    } else {
      response = `No existe un producto con ID: ${req.params.id}`;
    }
    res.json(response);
  });

  router.delete("/:id", (req, res) => {
    let buscandoPorId = datosProductos.find(
      (element) => element.id == req.params.id
    );
    if (buscandoPorId) {
      response = "Producto Eliminado";
    } else {
      response = `No existe un producto con ID: ${req.params.id}`;
    }
    res.json(response);
  });
}

module.exports = serverRouter;
