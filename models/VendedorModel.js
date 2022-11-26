const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vendedorSchema = Schema({
    codigo : Number,
    nome: String,
    idade : Number
})

module.exports = mongoose.model("Vendedor", vendedorSchema);