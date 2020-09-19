const express = require("express");

const routes = express.Router();

const PedidoController = require("../src/controllers/PedidoController");

//RETORNA TODOS OS PEDIDO
routes.get("/", PedidoController.listarPedidos);

//INSERE UM PEDIDO
routes.post("/", PedidoController.inserirPedido);

//RETORNA OS DADOS DE UM PEDIDO
routes.get("/:id", PedidoController.mostrarPedido);

//DELETA UM PEDIDO
routes.delete("/:id", PedidoController.destroy);

module.exports = routes;