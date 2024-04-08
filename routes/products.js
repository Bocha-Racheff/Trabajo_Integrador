var express = require('express');
var router = express.Router();


const productController = require("../controllers/productControllers");


router.get('/add', productController.productAdd)

router.get('/id', productController.show)

router.get('/search', productController.search)





module.exports = router;