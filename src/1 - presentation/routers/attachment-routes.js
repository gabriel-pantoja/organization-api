const router = require('express').Router()
const multer = require('multer')
const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) { cb(null, 'uploads/comprovantes') },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})
const imageFileFilter = (req, file, cb) => {
  // if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
  //   return cb(new Error('You can upload only image files!'))
  // }
  cb(null, true)
}
const upload = multer({ fileFilter: imageFileFilter, storage: imageStorage })
  .single('comprovante')

const AttachmentController = require('../controllers/attachment-controller')
const attachmentController = new AttachmentController()

router.post('/attachment/checking-copy', upload, attachmentController.uploadCheckingCopy)
router.get('/attachment/download', attachmentController.download)

module.exports = router
