const { body } = require("express-validator");
const db = require("../database/models");

const registerValidation = [
    body("usuario").notEmpty().withMessage("El nombre es requerido"),
    body("email").notEmpty().withMessage("El email es requerido").isEmail().withMessage("Formato de email inválido").custom((value, { req }) => { //Verifica que el email no exista.
        return db.User.findOne({
            where: { email: req.body.email }, //Accedemos al request.
        })
            .then(function (user) {
                if (user) { 
                    throw new Error("El email ya está registrado.");
                }
            })


    }),
    body("password").notEmpty().withMessage("La contraseña es requerida").isLength({ min: 4 }).withMessage("La contraseña debe tener al menos 4 caracteres"),
    body("retypePassword").notEmpty().withMessage("Debe repetir la contraseña").custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error("Las contraseñas no coinciden");
        }
        return true;
    }),
];

module.exports = registerValidation;
