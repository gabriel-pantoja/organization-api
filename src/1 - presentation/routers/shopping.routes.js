const router = require('express').Router()
const shoppingController = require('../controllers/shopping.controller')

router.get('/shopping', shoppingController.getAll)
router.get('/shopping/:id', shoppingController.getById)
router.post('/shopping', shoppingController.post)
router.put('/shopping/:id', shoppingController.put)
router.delete('/shopping/:id', shoppingController.delete)
router.delete('/shopping', shoppingController.deleteAll)

module.exports = router
