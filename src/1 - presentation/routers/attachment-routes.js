const router = require('express').Router()
const AttachmentController = require('../controllers/attachment-controller')

const attachmentController = new AttachmentController()

router.get('/attachment/:file', attachmentController.download)

module.exports = router
