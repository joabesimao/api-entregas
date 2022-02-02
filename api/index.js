const express = require("express");
const routes = require("./routes");
const res = require("express/lib/response");

const app = express();

const port = 3000;

routes(app);

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`));

module.exports = app;
