const express = require("express");

const router = express.Router();

//RETORNA TODOS OS PEDIDOS
router.get("/", (req, res, next) => {
    res.status(200).send({
        mensagem: "Usando o GET da rota de pedido"
    });
});


//INSERE UM PEDIDOS
router.post("/", (req, res, next) => {
    res.status(201).send({
        mensagem: "Usando o POST dentro da rota de pedido"
    });
});

//RETORNA OS DADOS DE UM PEDIDOS
router.get("/:id_produto", (req, res, next) => {
    const id = req.params.id_produto;

    if (id === "especial") {
        res.status(200).send({
            mensagem: "Você descobriu o id especial",
            id: id
        });
    } else {
        res.status(200).send({
            mensagem: "Você passou um id"
        });
    }
});

//ALTERA UM PEDIDOS
router.put("/", (req, res, next) => {
    res.status(201).send({
        mensagem: "Usando o PUT dentro da rota de pedido"
    });
});

//DELETA UM PEDIDOS
router.delete("/", (req, res, next) => {
    res.status(201).send({
        mensagem: "Usando o DELETE dentro da rota de pedido"
    });
});

module.exports = router;