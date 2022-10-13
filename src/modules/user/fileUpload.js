const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
       
        cb(null, file.originalname)
    },
    imageFilter:function (req, file, cb) {
        if (["jpg", "jpeg", "png"].includes(file.mimetype.split("/")[1])) {
            cb(null, true)
        }
        else {
            cb(new Error('This is not Image file'), false)
        }
    }
})

const imageFilter = (req, file, cb) => {
    if (["jpg", "jpeg", "png"].includes(file.mimetype.split("/")[1])) {
        cb(null, true)
    }
    else {
        cb(new Error('Only image files are allowed!'), false)
    }
}

// const limit = multer.fileSize()
const upload = multer({ storage: storage, fileFilter: imageFilter, limits: { fileSize: 500*1000 } }).single('file')

exports.fileUpload = (req, res, next) => {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            
            return res.status(400).send(err.message)
        }
        else if(err) {
            return res.status(400).send(err.message)
            
        }
        next()
    })
}

