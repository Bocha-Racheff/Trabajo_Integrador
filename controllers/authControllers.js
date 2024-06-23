const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require("../database/models");
const op = db.Sequelize.Op

const authController = {
    login: function (req, res) {
        // Si el usuario ya está logueado, redirigir al perfil
        if (req.session.user) {
            return res.redirect(`/profile`);
        }
        return res.render("login", { oldData: {}, errors: {} });
    },
    processLogin: function (req, res) {
        const resultValidation = validationResult(req);

        if (!resultValidation.isEmpty()) {
            return res.render("login", { errors: resultValidation.mapped(), oldData: req.body });
        }

        db.User.findOne({ where: { email: req.body.email } })
            .then(function (user) {

                if (!user) {
                    return res.render("login", {
                        errors: { email: { msg: "Correo no registrado" } },
                        oldData: req.body
                    });
                } else {
                    if (bcrypt.compareSync(req.body.password, user.contrasena)) {
                        req.session.user = user;
                        if (req.body.rememberme) {
                            res.cookie('userId', user.id, { maxAge: 1000 * 60 * 60 * 24 * 30 });
                        }
                        return res.redirect(`/profile`);
                    } else {
                        return res.render("login", {
                            errors: { password: { msg: "Contraseña incorrecta" } },
                            oldData: req.body
                        });
                    }
                }

            })
            .catch(function (error) {
                console.log("Error al buscar el usuario", error);
                return res.render("login", {
                    errors: { general: { msg: "Ocurrió un error al intentar ingresar." } },
                    oldData: req.body
                });
            });
    },
    logout: function (req, res) {
        req.session.destroy();
        res.clearCookie('userId');
        return res.redirect('/');
    },
    register: function (req, res) {

        if (req.session.user) {
            return res.redirect('/profile');
        }
        return res.render("register", { oldData: {}, errors: {} });
    },
    store: function (req, res) {
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
            .then(function (user) {
                return res.redirect("/login");
            })
            .catch(function (err) {
                console.log("Error al guardar el usuario", err);
                return res.render("register", {
                    errors: { general: { msg: "Ocurrió un error al registrar el usuario." } },
                    oldData: req.body
                });
            });
    },
    profileEdit: function (req, res) {
        // SI NO ESTÁ LOGEADO LO DIRECCION AL LOGIN
        if (!req.session.user) {
            return res.redirect('/login');
        }
        
        const idUsuario = req.session.user.id;


        db.User.findByPk(idUsuario).then((data) => {
            console.log("data usuario: ", JSON.stringify(data, null, 4));
            return res.render("profile-edit", { oldData: data, errors: {},  dataUsuario: req.session.user  });
        })
            .catch((error) => {
                console.log(error);
            });
     
        
    },
    profileUpdate: function (req,res) {
        const resultValidation = validationResult(req);
        if (!resultValidation.isEmpty()) {
            return res.render("profile-edit", { oldData: req.body, errors: resultValidation.mapped(),  dataUsuario: req.session.user });
        }

        let data = req.body;
        let userEdit = {
            email: data.email,
            fecha_nacimiento: data.fecha_nacimiento,
            dni: data.dni,
            foto_perfil:data.foto_perfil
        };

        let password = req.body.password;
        if(password){
            userEdit.contrasena = bcrypt.hashSync(password, 10);
        }
        
        const idUsuario = req.session.user.id;
        console.log(req.session.user);
        db.User.update(userEdit, {
            where: {
                id: idUsuario,
            }
        })
            .then(function (data) {
                console.log(data)
                //NECESITO ACTUALIZAR LOS DATOS DE SESSION, POR LO QUE TOMO COMO BASE LA SESION ANTERIOR (ANTES DE ACTUALIZAR), Y LUEGO PISO LOS DATOS QUE CAMBIARON EN LA ACTUALIZACION
                // ... SPREAD -> VUELCA TODAS LAS PROPIEDADES DEL OBJETO, EL SEGUNDO OBJETO PISA LAS DEL PRIMERO (SOLO LAS QUE SE REPITAN).
                // {ID:32, nombre:'juan',email:'juan@gmail.com', email:'juan32@gmail.com' }
                req.session.user = {...req.session.user, ...userEdit };
                console.log(req.session.user);
                return res.redirect(`/profile`);
            })
            .catch(function (err) {
                console.log(err);
            });


    },
    profile: function (req, res) {
        if (!req.session.user) {
            return res.redirect('/login');
        }

        const idUsuario = req.session.user.id;
        db.User.findByPk(idUsuario, {
            
            include: [
                {
                    association: 'products',
                   
                }
            ], 
        }).then((data) => {
            return res.render("profile", { data, dataUsuario: req.session.user });

        })
            .catch((error) => {
                console.log(error);
            });
    }
    ,
    showProfile: function (req, res) {
        const idUsuario = req.params.id;
        db.User.findByPk(idUsuario, {
            
            include: [
                {
                    association: 'products',
                   
                }
            ], 
       
        }).then((data) => {
            console.log("data usuario: ", JSON.stringify(data, null, 4));
            return res.render("profile", { data, dataUsuario: req.session.user });

        })
            .catch((error) => {
                console.log(error);
            });
    }
};

module.exports = authController;
