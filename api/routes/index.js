const bodyParser = require("body-parser");
const res = require("express/lib/response");
const clientes = require("./clientesRoute");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(clientes);
};
