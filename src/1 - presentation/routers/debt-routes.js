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

const DebtController = require('../controllers/debt-controller')
const debtController = new DebtController()

router.use(token.check)

router.get('/debt', debtController.get)
router.get('/debt/:id', debtController.getById)
router.post('/debt', upload, debtController.post)
router.put('/debt/:id', debtController.put)
router.delete('/debt/:id', debtController.delete)
router.get('/debt/change-status-payment/:id', debtController.changeStatusPayment)

module.exports = router
