const express = require("express");

const router = express.Router();

//RETORNA TODOS OS PRODUTOS
router.get("/", (req, res, next) => {
    res.status(200).send({
        mensagem: "Usando o GET da rota de produtos"
    });
});


//INSERE UM PRODUTO
router.post("/", (req, res, next) => {
    res.status(201).send({
        mensagem: "Usando o POST dentro da rota de produtos"
    });
});

//RETORNA OS DADOS DE UM PRODUTO
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

//ALTERA UM PRODUTO
router.put("/", (req, res, next) => {
    res.status(201).send({
        mensagem: "Usando o PUT dentro da rota de produtos"
    });
});

//DELETA UM PRODUTO
router.delete("/", (req, res, next) => {
    res.status(201).send({
        mensagem: "Usando o DELETE dentro da rota de produtos"
    });
});

module.exports = router;