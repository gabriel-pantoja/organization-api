const DebtService = require('../../2 - application/service/debt.service')
const HttpResponse = require('../../3 - domain/models/http-response.model')

const debtService = new DebtService()

module.exports = class DebtController {
  async get (req, res) {
    try {
      return HttpResponse.ok(res, await debtService.get(req))
    } catch (err) {
      return HttpResponse.badRequest(res, err.message)
    }
  }

  async getById (req, res) {
    try {
      return HttpResponse.ok(res, await debtService.getById(req))
    } catch (err) {
      return HttpResponse.badRequest(res, err.message)
    }
  }

  async post (req, res) {
    try {
      return HttpResponse.ok(res, await debtService.post(req))
    } catch (err) {
      return HttpResponse.badRequest(res, err.message)
    }
  }

  async put (req, res) {
    try {
      return HttpResponse.ok(res, await debtService.put(req))
    } catch (err) {
      return HttpResponse.badRequest(res, err.message)
    }
  }

  async delete (req, res) {
    try {
      return HttpResponse.ok(res, await debtService.delete(req))
    } catch (err) {
      return HttpResponse.badRequest(res, err.message)
    }
  }
}
