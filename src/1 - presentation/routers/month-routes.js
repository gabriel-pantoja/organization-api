const router = require('express').Router()
const MonthController = require('../controllers/month-controller')

const monthController = new MonthController()

router.get('/month-select', monthController.getSelect)

module.exports = router
