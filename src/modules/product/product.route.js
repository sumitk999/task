
const router = require('express').Router();
const productController = require('./productController')

router.post('/createProduct',productController.createProduct)
router.post('/getAllProducts',productController.getAllProducts)
router.post('/getProductsById/:id',productController.getProductsById)
router.put('/updateProduct/:id',productController.updateProduct)
router.delete('/deleteProduct/:id',productController.deleteProduct)

module.exports = router