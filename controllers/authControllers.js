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
    },   profileEdit: function(req, res) {
        
        return res.render("profile-edit", { datos: "hola" });
    }, showProfile: function(req, res) {
        
        return res.render("profile", {dataUsuario: db.usuarios[0]});
    }

};

module.exports = authController;
