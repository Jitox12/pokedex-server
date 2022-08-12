const multer = require('multer')

function uploadFile() {
  const storage = multer.diskStorage({
    destination: 'public/uploads/files',
    filename: function (_req, file, cb) {
      var uniqueSuffix = file.originalname.slice(
        file.originalname.lastIndexOf('.')
      )
      cb(null, file.originalname + '' + Date.now() + '' + uniqueSuffix)
    },
  })

  const upload = multer({ storage: storage })
  return upload
}
module.exports = uploadFile
