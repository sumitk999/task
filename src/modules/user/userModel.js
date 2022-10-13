const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id:Number,
    name:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true  
    },
    pass:{
        type:String,
        required:true
    },
    profilePic:{
        type:String
    }
})

module.exports = mongoose.model("User",userSchema)