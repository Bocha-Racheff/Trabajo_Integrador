var express = require('express');
var router = express.Router();

const authController = require("../controllers/authControllers");


router.get('/login', authController.login)
router.get('/register', authController.register)
router.get('/profile', authController.showProfile)
router.get('/profile/edit', authController.profileEdit)

module.exports = router;
