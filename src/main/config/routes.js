const express = require('express')
const routes = express.Router()
const authRoutes = require('../../1 - presentation/routers/auth.routes')
const shoppingRoutes = require('../../1 - presentation/routers/shopping.routes')
const debtRoutes = require('../../1 - presentation/routers/debt.routes')

routes.get('/', function (req, res) {
  res.status(404).send('Not found Teste')
})

routes.use('/', authRoutes)
routes.use('/', debtRoutes)
routes.use('/', shoppingRoutes)

module.exports = routes
