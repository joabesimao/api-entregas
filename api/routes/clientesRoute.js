const { Router } = require("express");
const { pegaTodosOsClientes } = require("../controllers/ClienteController");
const ClienteController = require("../controllers/ClienteController");

const router = Router();

router
  .get("/clientes", ClienteController.pegaTodosOsClientes)
  .get("/clientes/:id", ClienteController.pegarUmCliente)
  .post("/clientes", ClienteController.criarCliente);

module.exports = router;
