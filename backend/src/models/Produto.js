const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProdutoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    preco: {
        type: Number,
        required: true,
    },
    inCart: {
        type: Boolean,
        required: true,
    },
    count: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    tipoDoProduto: {
        type: String,
        required: true,
    },
    inseridoEm: {
        type: Date,
        default: Date.now,
    },
});

ProdutoSchema.plugin(mongoosePaginate);

mongoose.model("Produto", ProdutoSchema);
