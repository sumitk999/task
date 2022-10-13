const jwt = require('jsonwebtoken')
const authentication = (req,res,next) =>{
    const token = req.headers['authorization'].split(' ')[1]
    if(!token) return "You are not authenticated"
    const verifyTok = jwt.verify(token,'my_secrete_key')
    req.userId = verifyTok.userId
    // console.log(verifyTok);
    next()
}

module.exports = authentication