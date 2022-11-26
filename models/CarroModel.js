const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carroSchema = Schema({
    placa : String,
    fabricante: String,
    cor : String
})

module.exports = mongoose.model("Carro", carroSchema);