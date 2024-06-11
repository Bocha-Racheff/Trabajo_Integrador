var express = require('express');
var router = express.Router();
const authController = require("../controllers/authControllers");
//uso la middleware
const registerValidator = require('../middleware/register-validator');

const loginValidation = require('../middleware/login-validator')

router.get('/login', authController.login);
router.post('/login', loginValidation, authController.processLogin);
router.post('/logout', authController.logout);
router.get('/register', authController.register);
router.post('/register/store', registerValidator, authController.store);
router.get('/profile', authController.showProfile);
router.get('/profile/edit', authController.profileEdit);

module.exports = router;
