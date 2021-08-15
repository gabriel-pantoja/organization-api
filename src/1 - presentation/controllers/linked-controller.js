const HttpResponse = require('../../3 - domain/models/http-response-model')
const LinkedService = require('../../2 - application/service/linked-service')

const linkedService = new LinkedService()

module.exports = class LinkedController {
  async get (req, res) {
    try {
      return HttpResponse.ok(res, await linkedService.get(req))
    } catch (err) {
      return HttpResponse.badRequest(res, err.message)
    }
  }

  async post (req, res) {
    try {
      return HttpResponse.ok(res, await linkedService.post(req))
    } catch (err) {
      return HttpResponse.badRequest(res, err.message)
    }
  }

  async delete (req, res) {
    try {
      return HttpResponse.ok(res, await linkedService.delete(req))
    } catch (err) {
      return HttpResponse.badRequest(res, err.message)
    }
  }

  async download (req, res) {
    try {
      const file = await linkedService.download(req)
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

  async uploadCheckingCopyUser (req, res) {
    try {
      return HttpResponse.ok(res, await linkedService.uploadCheckingCopyUser(req))
    } catch (err) {
      return HttpResponse.badRequest(res, err.message)
    }
  }

  async changeStatusPaymentUser (req, res) {
    try {
      return HttpResponse.ok(res, await linkedService.changeStatusPaymentUser(req))
    } catch (err) {
      return HttpResponse.badRequest(res, err.message)
    }
  }
}
