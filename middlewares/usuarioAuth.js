function auth(req, res, next){
    if(req.session.usuario){
        next();
    }else{
        res.redirect("/usuario/login");
    }
}

module.exports = auth;