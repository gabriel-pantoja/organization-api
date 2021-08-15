const router = require('express').Router()
const LinkedController = require('../controllers/linked-controller')
const multer = require('multer')
const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) { cb(null, 'uploads/comprovantes-usuario') },
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
  .single('comprovante-usuario')

const linkedController = new LinkedController()

router.get('/linked', upload, linkedController.get)
router.get('/linked/download/:file', upload, linkedController.download)
router.get('/linked/change-status-payment-user', linkedController.changeStatusPaymentUser)
router.post('/linked/checking-copy-user', upload, linkedController.uploadCheckingCopyUser)
router.post('/linked', linkedController.post)
router.delete('/linked', linkedController.delete)

module.exports = router
