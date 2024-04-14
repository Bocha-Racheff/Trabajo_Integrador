const db = require("../db/db.js");

const authController = { 

    login: function(req, res) {
        const datosLogin = {
            mensaje: "Inicia sesion"
        };
        return res.render("login", { datos: datosLogin });
    },
    register: function(req, res) {
        
        return res.render("register", { datos: "hola" });
    },   
    profileEdit: function(req, res) {
        
        return res.render("profile-edit", { dataUsuario: db.usuarios[0]});

    }, showProfile: function(req, res) {
        const listadoProductos = db.productos;
        // let id = req.params.idUsuario;
        // let usuario;

        // for (let i = 0; i<db.usuarios.length; i++) {
        //     if (id.toLowerCase() === db.usuarios[i].usuario){
        //         usuario = db.usuarios[i]   
        //     }}
        return res.render("profile", {dataUsuario:db.usuarios[0], listadoProductos:listadoProductos});

    }

};

module.exports = authController;
