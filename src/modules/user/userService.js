const userModel = require('./userModel')
const jwt = require('jsonwebtoken')
const multer = require('multer')



const userReg = async (req) => {
    const data = req.body
// console.log(req.file);
data.profilePic = req.file.path
   
   
    const usernameExists = await userModel.findOne({ userName: data.userName })
    // if(usernameExists) return "This username already exists"
    const userCreated = await userModel.create(data)

    return userCreated
}

const userLogin = async (req) => {
    const data = req.body

    const user = await userModel.findOne(data)

    if (user) {
        const token = jwt.sign(
            {
                userId: user._id,
                username: user.userName,
                iat: Date.now()
            }, "my_secrete_key",
            { expiresIn: '10d' }
        )
        return {
            token,
            user
        }
    } else {
        return "User not found"
    }
}

const updateUser = async (req) => {
    const data = req.body
    const id = req.params.id
    const idInToken = req.userId
    const userExists = await userModel.findOne({ id: id })
    if (!userExists) return "User not found"

    data.profilePic = req.file.path
    
    if(idInToken !== userExists._id.toString()) return "You are not allowed to update the data"

    const updatedData = await userModel.findOneAndUpdate({ id: id }, data, { new: true })
    return updatedData
}

module.exports = { userReg, userLogin, updateUser }