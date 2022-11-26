
const CarroModel = require("../models/CarroModel");
const bcrypt = require ("bcryptjs");

class CarroController{

    static async relatorio(req, res){
        const listaCarros = await CarroModel.find();
        res.render("carro/relatorio", {listaCarros});
    }

    static async listar(req, res){
        const salvo = req.query.s;
        const removido = req.query.r;
        const atualizado = req.query.a;
        const listaCarros = await CarroModel.find();
        res.render("carro/listar", {listaCarros, salvo, removido, atualizado});
    };

    static async cadastrarGet(req, res){
        const placa = req.params.placa;
        const erro = req.query.e;
        let carro = {};
        let escondido = "";
        if (placa){
            carro = await CarroModel.findOne({placa: placa});
            escondido = "hidden";
        }
        res.render("carro/cadastrar", {carro, escondido, erro});
    };

    static async cadastrarPost(req, res){
        const carro = req.body;
        if (carro.id){
            await CarroModel.findOneAndUpdate({placa: carro.placa},
            {
                fabricante: carro.fabricante,
                cor: carro.cor
            });
            res.redirect("/carro?a=1");

        } else{
            const novoCarro = new CarroModel({
                placa: carro.placa,
                fabricante: carro.fabricante,
                cor: carro.cor
            })
            await novoCarro.save();
            res.redirect("/carro?s=1");
        }

    };

    static async detalhar(req, res){
        const plac = req.params.placa;
        const resultado = await CarroModel.findOne({placa: plac});
        res.render("carro/detalhar", {resultado});
    };

    static async remover(req, res){
        const plac = req.params.placa;
        await CarroModel.findOneAndDelete({placa: plac});
        res.redirect("/carro?r=1");
    };

}

module.exports = CarroController;