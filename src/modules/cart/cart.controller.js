const cartService = require('./cart.service')

const addItemToCart = async (req,res) =>{
    const respons = await cartService.addToCart(req)

    return res.send(respons)
}

const removeProduct = async (req,res) =>{
    const respons = await cartService.remove(req)
    return res.send(respons)
}

module.exports= {addItemToCart, removeProduct}