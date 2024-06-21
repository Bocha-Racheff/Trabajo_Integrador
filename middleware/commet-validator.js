const { body } = require('express-validator');

const commentValidation = [
    body('comentario')
        .notEmpty().withMessage('Debes completar la imagen del producto.').isLength({ min: 3, max:200 }).withMessage('Debe tener al menos 3 caracteres su comentario')
];

module.exports = commentValidation;
