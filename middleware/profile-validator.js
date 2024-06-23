const { body } = require('express-validator');
const db = require("../database/models")

const profileValidation = [

    body("email").notEmpty().withMessage("El email es requerido").isEmail().withMessage("Formato de email inválido").custom((value, { req }) => { //Verifica que el email no exista.
      
            return db.User.findOne({
                where: { email: req.body.email }, //Accedemos al request.
            })
                .then(function (user) {
                    if (req.body.oldEmail != req.body.email && user) {
                        throw new Error("El email ya está registrado.");
                    }
                })
       

    })
];
module.exports = profileValidation;
