const router = require('express').Router()
const multer = require('multer')
const token = require('../../main/helpers/token')

const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const path = 'uploads/photo'
    file.path = path
    cb(null, path)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})
const imageFileFilter = (req, file, cb) => {
  if (file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return cb(new Error('You can upload only image files!'))
  }
  cb(null, true)
}
const upload = multer({ fileFilter: imageFileFilter, storage: imageStorage }).any()

const UserController = require('../controllers/user-controller')
const userController = new UserController()

router.use(token.check)

router.get('/user', userController.get)
router.get('/user/:id', userController.getById)
router.get('/user-select', userController.getSelect)
router.get('/user-url-photo/:id', userController.getUrlPhoto)
router.post('/user', upload, userController.post)
router.put('/user/:id', userController.put)
router.delete('/user/:id', userController.delete)

module.exports = router
