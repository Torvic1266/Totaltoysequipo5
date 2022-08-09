const controladorUsuario = {
    registro: (req,res) => {
        res.render("register")
    },
    login: (req,res) => {
        res.render("login")
},
create: function(req, res) {
    let usuario= {
        Nombre:req.body.Nombre,
        Apellido:req.body.Apellido,
        Email:req.body.Email,
    }
    res.redirect("/usuario/login");
}   
};

module.exports = controladorUsuario;