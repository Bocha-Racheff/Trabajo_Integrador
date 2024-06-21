var express = require('express');
var router = express.Router();


const productController = require("../controllers/productControllers");
const productValidator = require('../middleware/product-validator');
const commentValidator = require('../middleware/commet-validator');


router.get('/add', productController.productAdd)
router.post('/store', productValidator, productController.productStore);
router.get('/detail/:id', productController.showDetail)
router.post('/detail/:id',commentValidator, productController.commentStore)
router.get('/edit/:id', productController.productEdit)
router.post('/update/:id', productValidator, productController.productUpdate);
router.post('/destroy/:id', productController.destroy);
router.get('/search', productController.search)





module.exports = router;