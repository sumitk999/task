const productModel = require('./productModel')

const createNewProduct = async (req) =>{
    const data= req.body
    const productExists = await productModel.findOne({id:data.id})
   
    if(productExists) return "Product already exists with this product id!"

    const product = await productModel.create(data)
    return product
}

const getProducts = async () =>{
    const allProducts = await productModel.find().sort({price:1})
   return (allProducts)
}

const getProductById = async (req) =>{
    const id = req.params.id
    const product = await productModel.findOne({id:id})
    if(product){
        return product
    }else{
        return "No product found"
    }
    
}

const updateProduct = async (req) =>{
    const id = parseInt(req.params.id) 
    const data =req.body
    const product = await productModel.findOne({id:id})
    if(!product) return "No product found to update"
    const updatedData =await productModel.findOneAndUpdate({id:id},data,{new:true})

    return updatedData
}

const deleteProduct = async (req) =>{
    const id = req.params.id
    const product = await productModel.findOne({id:id})
    if(!product) return "No product found to delete"
    await productModel.findOneAndDelete({id:id})
    
    return 'Product deleted successfully'
}

module.exports = {createNewProduct, getProducts, getProductById,updateProduct,deleteProduct}