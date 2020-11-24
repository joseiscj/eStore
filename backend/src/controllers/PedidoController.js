const mongoose = require("mongoose");

const Pedido = mongoose.model("Pedido");

module.exports = {
    async listarPedidos(req, res) {
        const { page = 1 } = req.query;
        const pedidos = await Pedido.paginate({}, { page, limit: 12 });

        return res.json(pedidos);
    },

    async mostrarPedido(req, res) {
        const pedido = await Pedido.findById(req.params.id);

        return res.json(pedido);
    },

    async inserirPedido(req, res) {
        const pedido = await Pedido.create(req.body);

        return res.json(pedido);
    },

    async destroy(req, res) {
        await Pedido.findByIdAndRemove(req.params.id);

        return res.send();
    }

}