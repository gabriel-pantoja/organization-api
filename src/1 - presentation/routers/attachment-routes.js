const router = require('express').Router()
const multer = require('multer')
const fs = require('fs')
const token = require('../../main/helpers/token')

const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const path = `uploads/${file.fieldname}`
    file.path = path
    if (!fs.existsSync(path)) fs.mkdirSync(path)
    cb(null, path)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.originalname + '-' + uniqueSuffix)
  }
})
const imageFileFilter = (req, file, cb) => {
  if (file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return cb(new Error('You can upload only image files!'))
  }
  cb(null, true)
}
const upload = multer({ fileFilter: imageFileFilter, storage: imageStorage }).any()

const AttachmentController = require('../controllers/attachment-controller')
const attachmentController = new AttachmentController()

router.use(token.check)

router.post('/attachment/checking-copy', upload, attachmentController.uploadCheckingCopy)
router.get('/attachment/download', attachmentController.download)

module.exports = router
