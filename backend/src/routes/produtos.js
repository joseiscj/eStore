const express = require("express");

const router = express.Router();

const ProdutoController = require("../controllers/ProdutoController");


//RETORNA TODOS OS PRODUTOS
router.get("/", ProdutoController.listarProdutos);

//INSERE UM PRODUTO
router.post("/", ProdutoController.inserirProduto);

//RETORNA OS DADOS DE UM PRODUTO
router.get("/:id", ProdutoController.mostrarProduto);

//ALTERA UM PRODUTO
router.put("/:id", ProdutoController.update);

//DELETA UM PRODUTO
router.delete("/:id", ProdutoController.destroy);

module.exports = router;