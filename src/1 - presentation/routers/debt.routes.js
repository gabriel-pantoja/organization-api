const router = require('express').Router()
const DebtController = require('../controllers/debt.controller')

const debtController = new DebtController()

router.get('/debt', debtController.get)
router.get('/debt/:id', debtController.getById)
router.post('/debt', debtController.post)
router.put('/debt/:id', debtController.put)
router.delete('/debt/:id', debtController.delete)

module.exports = router
