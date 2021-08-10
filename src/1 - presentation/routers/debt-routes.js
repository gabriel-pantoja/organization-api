const router = require('express').Router()
const multer = require('multer')
const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) { cb(null, 'uploads/faturas') },
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
  .single('fatura')

const DebtController = require('../controllers/debt-controller')
const debtController = new DebtController()

router.get('/debt', debtController.get)
router.get('/debt/:id', debtController.getById)
router.post('/debt', upload, debtController.post)
router.put('/debt/:id', debtController.put)
router.delete('/debt/:id', debtController.delete)

module.exports = router
