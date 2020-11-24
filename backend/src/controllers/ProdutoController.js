const mongoose = require("mongoose");

const Produto = mongoose.model("Produto");

module.exports = {
    async listarProdutos(req, res) {
        const { page = 1 } = req.query;
        const produtos = await Produto.paginate({}, { page, limit: 12 });

        return res.json(produtos);
    },

    async mostrarProduto(req, res) {
        const produto = await Produto.findById(req.params.id);

        return res.json(produto);
    },

    async inserirProduto(req, res) {
        const produto = await Produto.create(req.body);

        return res.json(produto);
    },

    async update(req, res) {
        const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true});
        
        return res.json(produto);
    },

    async destroy(req, res) {
        await Produto.findByIdAndRemove(req.params.id);

        return res.send();
    }

}