const router = require('express').Router()
const token = require('../../main/helpers/token')

const UserController = require('../controllers/user-controller')
const userController = new UserController()

router.use(token.check)

router.get('/user', userController.get)
router.get('/user/:id', userController.getById)
router.get('/user-select', userController.getSelect)
router.post('/user', userController.post)
router.put('/user/:id', userController.put)
router.delete('/user/:id', userController.delete)

module.exports = router
