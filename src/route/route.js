const router = require('express').Router();
const userRoutes = require('../modules/user/user.route')
const productRoutes = require('../modules/product/product.route')
const cartRoutes = require('../modules/cart/cart.route')
const multer = require('multer')

const upload = multer({ dest: 'uploads/' })


router.use('/user',userRoutes)
router.use('/product',productRoutes)
router.use('/cart',cartRoutes)



module.exports = router