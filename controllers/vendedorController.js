
const VendedorModel = require("../models/VendedorModel");

class VendedorController{

    static async relatorio(req, res){
        const listaVendedor = await VendedorModel.find();
        res.render("vendedor/relatorio", {listaVendedores});
    }

    static async listar(req, res){
        const salvo = req.query.s;
        const removido = req.query.r;
        const atualizado = req.query.a;
        const listaVendedores = await VendedorModel.find();
        res.render("vendedor/listar", {listaVendedores, salvo, removido, atualizado});
    };

    static async cadastrarGet(req, res){
        const cod = req.params.codigo;
        let vendedor = {};
        let escondido = "";
        if (cod){
            vendedor = await VendedorModel.findOne({codigo: cod});
            escondido = "hidden";
        }
        res.render("vendedor/cadastrar", {vendedor, escondido});
    };

    static async cadastrarPost(req, res){
        const vendedor = req.body;
        if (vendedor.id){
            await VendedorModel.findOneAndUpdate({codigo: vendedor.codigo},
            {
                nome: vendedor.nome,
                idade: vendedor.idade
            });
            res.redirect("/vendedor?a=1");

        } else{
            const novoVendedor = new VendedorModel({
                codigo: vendedor.codigo,
                nome: vendedor.nome,
                idade: vendedor.idade
            })
            await novoVendedor.save();
            res.redirect("/vendedor?s=1");
        }

    };

    static async detalhar(req, res){
        const cod = req.params.codigo;
        const resultado = await VendedorModel.findOne({codigo: cod});
        res.render("vendedor/detalhar", {resultado});
    };

    static async remover(req,res){
        const cod = req.params.codigo;
        await VendedorModel.findOneAndDelete({codigo: cod});
        res.redirect("/vendedor?r=1");
    };

}

module.exports = VendedorController;