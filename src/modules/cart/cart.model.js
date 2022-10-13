const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
const cartSchema = new mongoose.Schema({
    userId:{
        type:ObjectId,
        required:true
    },
    products:[Object],
    totalPrice:{
        type:Number,
        default:0
    },
    count:{
        type:Number,
        default:1
    }
})

module.exports = mongoose.model('Cart',cartSchema)