const router = require('express').Router()
const authRoutes = require('../../1 - presentation/routers/auth-routes')
const shoppingRoutes = require('../../1 - presentation/routers/shopping-routes')
const debtRoutes = require('../../1 - presentation/routers/debt-routes')
const userRoutes = require('../../1 - presentation/routers/user-routes')
const attachmentRoutes = require('../../1 - presentation/routers/attachment-routes')
const linkedRoutes = require('../../1 - presentation/routers/linked-routes')

router.get('/', function (req, res) {
  res.status(404).send('Not found Teste')
})

router.use('/', authRoutes)
router.use('/', debtRoutes)
router.use('/', shoppingRoutes)
router.use('/', userRoutes)
router.use('/', attachmentRoutes)
router.use('/', linkedRoutes)

module.exports = app => {
  app.use('/api', router)
}
