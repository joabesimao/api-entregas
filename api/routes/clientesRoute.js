const { Router } = require("express");
const { pegaTodosOsClientes } = require("../controllers/ClienteController");
const ClienteController = require("../controllers/ClienteController");

const router = Router();

router
  .get("/clientes", ClienteController.pegaTodosOsClientes)
  .get("/clientes/:id", ClienteController.pegaUmCliente)
  .post("/clientes", ClienteController.criaCliente)
  .put("/clientes/:id", ClienteController.atualizaCliente)
  .delete("/clientes/:id", ClienteController.apagaCliente);

module.exports = router;
