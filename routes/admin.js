const express = require('express');

const path = require('path');

const rootDir = require('../util/path');

const productController = require('../controllers/products');

const router = express.Router();

router.use('/add-product', productController.getAddProductPage);

router.post('/product', productController.postProduct);

module.exports = router;