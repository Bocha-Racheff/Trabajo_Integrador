const { body } = require('express-validator');

const productValidation = [
    body('imgProducto')
        .notEmpty().withMessage('Debes completar la imagen del producto.'),
    body('titulo')
        .notEmpty().withMessage('Debes completar el título.'),
    body('descripcion')
        .notEmpty().withMessage('Debes completar descripción.')
];

module.exports = productValidation;
