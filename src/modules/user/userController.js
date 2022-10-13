
const userService = require('./userService')

const registerUser = async (req,res,next) =>{
    try {
        const {files}=req;
       
        const response = await userService.userReg(req)
        return res.status(201).json(response)
    } catch (error) {
        console.error("error"+error)
        next(error)
    }
}

const loginUser = async (req,res) =>{
   const response = await userService.userLogin(req)
   return res.json(response)
}

const updateUserData = async (req,res) =>{
    const response = await userService.updateUser(req)
    return res.send(response)
}

const temp = async (req,res,next)=>{
    try {
console.log(req.file);
        return true
    } catch (error) {
        next(error)
    }
}

module.exports = {registerUser, loginUser,updateUserData,temp}