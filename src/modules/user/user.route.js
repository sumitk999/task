const router = require('express').Router();
const userController = require('./userController')
const auth = require('./user.authentication')
// const multer = require('multer')
const fileUpload = require('./fileUpload')
// const upload = multer({limits:1000})






router.post('/register'
    , fileUpload.fileUpload
    , userController.registerUser)
router.post('/login', userController.loginUser)
router.put('/updateUser/:id',fileUpload.fileUpload , auth, userController.updateUserData)

module.exports = router