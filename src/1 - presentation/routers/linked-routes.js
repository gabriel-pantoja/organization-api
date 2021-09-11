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

const LinkedController = require('../controllers/linked-controller')
const linkedController = new LinkedController()

router.use(token.check)

router.get('/linked', upload, linkedController.get)
router.get('/linked/download', upload, linkedController.download)
router.get('/linked/change-status-payment-user', linkedController.changeStatusPaymentUser)
router.post('/linked/checking-copy-user', upload, linkedController.uploadCheckingCopyUser)
router.post('/linked', linkedController.post)
router.delete('/linked', linkedController.delete)

module.exports = router
