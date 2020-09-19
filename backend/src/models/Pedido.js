const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const PedidoSchema = new mongoose.Schema({
    id_produto: {
        type: String,
        required: true,
    },
    quantidade: {
        type: Number,
        required: true,
    },
    preco_total: {
        type: Number,
        required: true,
    },
    inseridoEm: {
        type: Date,
        default: Date.now,
    },
});

PedidoSchema.plugin(mongoosePaginate);

mongoose.model("Pedido", PedidoSchema);