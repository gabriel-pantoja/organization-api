const express = require('express')
const routes = express.Router()
const shoppingController = require('../controllers/shopping.controller')

routes.get('/shopping', shoppingController.getAll)
routes.get('/shopping/:id', shoppingController.getById)
routes.post('/shopping', shoppingController.post)
routes.put('/shopping/:id', shoppingController.put)
routes.delete('/shopping/:id', shoppingController.delete)
routes.delete('/shopping', shoppingController.deleteAll)

module.exports = routes
