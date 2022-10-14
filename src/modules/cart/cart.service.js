const cartModel = require('./cart.model')
const productModel = require('../product/productModel')

const addToCart = async (req) => {
    const data = req.body
    const productData = await productModel.findById(data.productId).select({ title: 1, price: 1 })
    const product = {
        _id:productData._id,
        title:productData.title,
        price:productData.price,
        count:1
    }
    const checkCart = await cartModel.findOne({ userId: data.userId })
    if (!checkCart) {
        const createCart = await cartModel.create({ userId: data.userId, products: product, totalPrice: product.price })
        return createCart
    } else {
        const checkProduct = await cartModel.findOne({ userId: data.userId }).select({ _id: 0, products: 1 })

        const prod = checkProduct.products
        
        let flag = false
        for(let i=0;i<prod.length;i++) {
          
            if (prod[i]._id.toString() == productData._id.toString()) {

                flag=true
                prod[i].count+=1
                break
            }
        }
        if(flag){
            const add = await cartModel.findOneAndUpdate({ userId: data.userId },{ $inc: { totalPrice: productData.price,count:1 } ,products:prod}, { new: true })
            return add
        }else{
            const add = await cartModel.findOneAndUpdate({ userId: data.userId }, { $push: { products: product }, $inc: { totalPrice: product.price,count:1} }, { new: true })
            return add
        }
        
    }
}

const remove = async (req) =>{
    const data = req.body
    const checkCart = await cartModel.findOne({userId: data.userId})
    const productData = await productModel.findById(data.productId).select({ title: 1, price: 1 })
    const product = {
        _id:productData._id,
        title:productData.title,
        price:productData.price,
        count:1
    }

    if(!checkCart) return "No cart found!"

    const checkProduct = await cartModel.findOne({ userId: data.userId }).select({ _id: 0, products: 1 })

    const prod = checkProduct.products
    if(!prod.length) return "Your cart is empty!"
    let flag = false
    for(let i=0;i<prod.length;i++) {
      
        if (prod[i]._id.toString() == data.productId) {

            if(prod[i].count >1){
                prod[i].count-=1
                flag =true
            }
            else{
                prod.splice(i,1)
                flag=true
            }
            
            break
        }
       
    }
    if(flag){
        const del = await cartModel.findOneAndUpdate({ userId: data.userId },{ $inc: { totalPrice: -productData.price,count:-1 } ,products:prod}, { new: true })
        return del
    }
    return "Product not found to delete"
    


}

module.exports = { addToCart,remove }