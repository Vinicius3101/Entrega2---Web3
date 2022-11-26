const express = require("express");
const routes = express.Router();

const auth = require("../middlewares/usuarioAuth");
const vendedorController = require("../controllers/vendedorController");

routes.get("/vendedor", auth, vendedorController.listar);

routes.get("/vendedor/relatorio", auth, vendedorController.relatorio);

routes.post("/vendedor", auth, vendedorController.cadastrarPost);

routes.get("/vendedor/cadastrar/:codigo?", auth, vendedorController.cadastrarGet);

routes.get("/vendedor/:codigo", auth, vendedorController.detalhar);

routes.get("/vendedor/remover/:codigo", auth, vendedorController.remover);

module.exports = routes;