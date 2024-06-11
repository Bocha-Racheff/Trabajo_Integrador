const { body } = require('express-validator');

const loginValidation = [
    body('email')
        .notEmpty().withMessage('Debes completar el email')
        .isEmail().withMessage('Debes escribir un formato de correo válido'),
    body('password')
        .notEmpty().withMessage('Debes completar una contraseña')
];

module.exports = loginValidation;
