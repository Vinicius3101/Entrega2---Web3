const express = require("express");
const routes = express.Router();

const auth = require("../middlewares/usuarioAuth");
const usuarioController = require("../controllers/usuarioController");

routes.get("/usuario", auth, usuarioController.listar);

routes.get("/usuario/relatorio", auth, usuarioController.relatorio);

routes.post("/usuario", usuarioController.cadastrarPost);

routes.get("/usuario/cadastrar/:email?", usuarioController.cadastrarGet);

routes.get("/usuario/remover/:email", auth, usuarioController.remover);

routes.get("/usuario/login", usuarioController.loginGet);

routes.post("/usuario/login", usuarioController.loginPost);

routes.get("/usuario/logout", auth, usuarioController.logout);

routes.get("/usuario/:email", auth, usuarioController.detalhar);

module.exports = routes;