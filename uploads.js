//create a storage engine
//for the uploaded files using multer package

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
});