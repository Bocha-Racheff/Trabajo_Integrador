var express = require('express');
var router = express.Router();

const indexController = require("../controllers/indexControllers");

router.get('/', indexController.showProducts)



module.exports = router;
