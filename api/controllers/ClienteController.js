const res = require("express/lib/response");
const database = require("../models");

class ClienteController {
  static async pegaTodosOsClientes(req, res) {
    try {
      const todosOsClientes = await database.Clientes.findAll();
      return res.status(200).json(todosOsClientes);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaUmCliente(req, res) {
    const { id } = req.params;
    try {
      const umCliente = await database.Clientes.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(umCliente);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaCliente(req, res) {
    const novoCliente = req.body;
    try {
      const novoClienteCriado = await database.Clientes.create(novoCliente);
      return res.status(200).json(novoClienteCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizaCliente(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      await database.Clientes.update(novasInfos, { where: { id: Number(id) } });
      const pessoaAtualizada = await database.Clientes.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(pessoaAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async apagaCliente(req, res) {
    const { id } = req.params;
    try {
      await database.Clientes.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ mensagem: `id ${id} deletado!` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}
module.exports = ClienteController;
