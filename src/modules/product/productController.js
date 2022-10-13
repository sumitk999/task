
const productService = require('./productService')

const createProduct = async (req,res) =>{
    const reaponse = await productService.createNewProduct(req)
    return res.send(reaponse)
}

const getAllProducts = async (req,res) =>{
    const allProducts = await productService.getProducts(req)
    return res.send(allProducts)
}

const getProductsById = async (req,res) =>{
   
    const response = await productService.getProductById(req)
    
        return res.send(response)
    
    
}

const updateProduct = async (req,res) =>{
       const response =await productService.updateProduct(req)

    return res.send(response)
}

const deleteProduct = async (req,res) =>{
    const response =await productService.deleteProduct(req)
    return res.send(response)
}

module.exports = {createProduct, getAllProducts, getProductsById,updateProduct,deleteProduct}