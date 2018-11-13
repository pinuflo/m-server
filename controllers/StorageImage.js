const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images/articles')
    },
    filename: function (req, file, cb) {
      crypto.pseudoRandomBytes(16, function (err, raw) {
        var extension = file.originalname.split('.').pop();
        cb(null, raw.toString('hex') + Date.now() + '.' + extension);
      });
    }
  });

function StoreImage(){
    return multer({ storage: storage }).single('imagen');
}

module.exports = StoreImage;