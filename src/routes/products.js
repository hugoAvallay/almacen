var express = require('express');
var router = express.Router();


const productsController = require('../controllers/productsController');

/* /products */
router.get('/carrito', productsController.carrito);
router.get('/detalleProducto', productsController.detalleProducto );


module.exports = router;