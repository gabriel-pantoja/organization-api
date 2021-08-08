const AuthService = require('../../2 - application/service/auth.service')
const HttpResponse = require('../../3 - domain/models/http-response.model')

const authService = new AuthService()

module.exports = class AuthController {
  async login (req, res) {
    try {
      const token = await authService.login(req)
      if (token === null) return HttpResponse.unauthorized(res, 'e-mail incorreto')
      return HttpResponse.ok(res, { token: token })
    } catch (err) {
      return HttpResponse.badRequest(res, err.message)
    }
  }
}
