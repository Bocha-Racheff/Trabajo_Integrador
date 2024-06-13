const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require("../database/models");

const authController = {
    login: function(req, res) {
        // Si el usuario ya está logueado, redirigir al perfil
        if (req.session.user) {
            return res.redirect('/profile');
        }
        return res.render("login", { oldData: {}, errors: {} });
    },
    processLogin: function(req, res) {
        const resultValidation = validationResult(req);

        if (!resultValidation.isEmpty()) {
            return res.render("login", { errors: resultValidation.mapped(), oldData: req.body });
        }

        db.User.findOne({ where: { email: req.body.email } })
            .then(function(user) {
                
                if(!user){
                    return res.render("login", {
                        errors: { email: { msg: "Correo no registrado" } },
                        oldData: req.body
                    });
                }else{
                    if(bcrypt.compareSync(req.body.password, user.contrasena)){
                        req.session.user = user;
                        if (req.body.rememberme) {
                            res.cookie('userId', user.id, { maxAge: 1000 * 60 * 60 * 24 * 30 });
                        }
                        return res.redirect('/profile');
                    }else{
                        return res.render("login", {
                            errors: { password: { msg: "Contraseña incorrecta" } },
                            oldData: req.body
                        });
                    }
                }

            })
            .catch(function(error) {
                console.log("Error al buscar el usuario", error);
                return res.render("login", {
                    errors: { general: { msg: "Ocurrió un error al intentar ingresar." } },
                    oldData: req.body
                });
            });
    },
    logout: function(req, res) {
        req.session.destroy();
        res.clearCookie('userId');
        return res.redirect('/');
    },
    register: function(req, res) {
        
        if (req.session.user) {
            return res.redirect('/profile');
        }
        return res.render("register", { oldData: {}, errors: {} });
    },
    store: function(req, res) {
        const resultValidation = validationResult(req);
        if (!resultValidation.isEmpty()) {
            return res.render("register", { errors: resultValidation.mapped(), oldData: req.body });
        }

        const user = {
            name: req.body.usuario,
            email: req.body.email,
            contrasena: bcrypt.hashSync(req.body.password, 10),
            fecha_nacimiento: req.body.fechaNacimiento,
            dni: req.body.dni,
            foto_perfil: req.body.fotoPerfil,
            createdAt: new Date()
        };

        db.User.create(user)
            .then(function(user) {
                return res.redirect("/login");
            })
            .catch(function(err) {
                console.log("Error al guardar el usuario", err);
                return res.render("register", {
                    errors: { general: { msg: "Ocurrió un error al registrar el usuario." } },
                    oldData: req.body
                });
            });
    },
    profileEdit: function(req, res) {
        return res.render("profile-edit", { dataUsuario: db.usuarios[0] });
    },
    showProfile: function(req, res) {
        const listadoProductos = db.productos;
        return res.render("profile", { dataUsuario: req.session.user, listadoProductos: listadoProductos });
    }
};

module.exports = authController;
