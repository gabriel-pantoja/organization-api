const router = require('express').Router()
const debtController = require('../controllers/debt.controller')

router.get('/debt', debtController.getAll)
router.get('/debt/:id', debtController.getById)
router.post('/debt', debtController.post)
router.put('/debt/:id', debtController.put)
router.delete('/debt/:id', debtController.delete)

module.exports = router
