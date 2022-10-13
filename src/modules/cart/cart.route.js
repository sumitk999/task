const router = require('express').Router()
const cartController = require('./cart.controller')

router.post('/addItem',cartController.addItemToCart)
router.post('/removeItem',cartController.removeProduct)

module.exports=router