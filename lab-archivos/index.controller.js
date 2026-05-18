const log = console.log
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        console.log("File Destination:", './public/'); // Log the destination path
        callback(null, './public/');
    },
    filename: function (req, file, callback) {
        console.log("Uploaded File:", req.body); // Log received form data
        return callback(null, file.originalname);
    }
});

const upload = multer({ storage: storage }).array('file', 1);

module.exports.upload_file = async (req, res) => {
    log("Cargando el archivo")
    res.status(200).json({code: 200, msg:"Ok"})
}