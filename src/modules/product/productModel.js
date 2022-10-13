const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    price:Number,
  
},{timestamps:true})

module.exports = mongoose.model("Product",productSchema)