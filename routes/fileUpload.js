// use the storage engine to
// handle the uploaded file

const router = require("./music");

const upload = multer({
    storage
});

router.post('/',
upload.single('song'),(req, res)=>{
    // req.file contains the uploaded file information

    //you can use req.file.originalname to get the file name

    res.send('File uploaded!')
});