const express = require("express");
const routes = express.Router();

const auth = require("../middlewares/usuarioAuth");
const carroController = require("../controllers/carroController");

routes.get("/carro", auth, carroController.listar);

routes.get("/carro/relatorio", auth, carroController.relatorio);

routes.post("/carro", auth, carroController.cadastrarPost);

routes.get("/carro/cadastrar/:placa?", auth, carroController.cadastrarGet);

routes.get("/carro/:placa", auth, carroController.detalhar);

routes.get("/carro/remover/:placa", auth, carroController.remover);

module.exports = routes;