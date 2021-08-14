const AttachmentService = require('../../2 - application/service/attachment-service')
const HttpResponse = require('../../3 - domain/models/http-response-model')

const attachmentService = new AttachmentService()

module.exports = class AttachmentController {
  async uploadCheckingCopy (req, res) {
    try {
      return HttpResponse.ok(res, await attachmentService.uploadCheckingCopy(req))
    } catch (err) {
      return HttpResponse.badRequest(res, err.message)
    }
  }

  async download (req, res) {
    try {
      const file = await attachmentService.download(req)
      if (file !== null) {
        res.writeHead(200, {
          'Content-Type': 'image/png',
          'Content-Length': file.length
        })
        return res.end(file)
      } else {
        return HttpResponse.badRequest(res, 'Não existe arquivo')
      }
    } catch (err) {
      return HttpResponse.badRequest(res, err.message)
    }
  }
}
