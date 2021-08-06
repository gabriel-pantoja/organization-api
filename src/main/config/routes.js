const express = require('express')
const routes = express.Router()
const authRoutes = require('../../presentation/routers/auth.router')
const shoppingRoutes = require('../../presentation/routers/shopping.router')
const debtRoutes = require('../../presentation/routers/debt.router')

routes.get('/', function (req, res) {
  res.status(404).send('Not found Teste')
})

routes.use('/', authRoutes)
routes.use('/', debtRoutes)
routes.use('/', shoppingRoutes)

module.exports = routes
