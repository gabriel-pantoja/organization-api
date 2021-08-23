const MonthService = require('../../2 - application/service/month-service')
const HttpResponse = require('../../3 - domain/models/http-response-model')

const monthService = new MonthService()

module.exports = class MonthController {
  async getSelect (req, res) {
    try {
      return HttpResponse.ok(res, await monthService.getSelect())
    } catch (err) {
      return HttpResponse.badRequest(res, err.message)
    }
  }
}
