const router = require('express').Router()
const authRoutes = require('../../1 - presentation/routers/auth.routes')
const shoppingRoutes = require('../../1 - presentation/routers/shopping.routes')
const debtRoutes = require('../../1 - presentation/routers/debt.routes')

router.get('/', function (req, res) {
  res.status(404).send('Not found Teste')
})

router.use('/', authRoutes)
router.use('/', debtRoutes)
router.use('/', shoppingRoutes)

module.exports = app => {
  app.use('/api', router)
}
