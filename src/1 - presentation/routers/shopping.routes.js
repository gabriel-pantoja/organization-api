const router = require('express').Router()
const ShoppingController = require('../controllers/shopping.controller')

const shoppingController = new ShoppingController()

router.get('/shopping', shoppingController.get)
router.get('/shopping/:id', shoppingController.getById)
router.post('/shopping', shoppingController.post)
router.put('/shopping/:id', shoppingController.put)
router.delete('/shopping/:id', shoppingController.delete)
router.delete('/shopping', shoppingController.deleteAll)

module.exports = router
