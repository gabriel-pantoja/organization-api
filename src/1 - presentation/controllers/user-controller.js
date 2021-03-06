const UserService = require('../../2 - application/service/user-service')
const HttpResponse = require('../../3 - domain/models/http-response-model')

const userService = new UserService()

module.exports = class UserController {
  async get (req, res) {
    try {
      return HttpResponse.ok(res, await userService.get())
    } catch (err) {
      return HttpResponse.badRequest(res, err.message)
    }
  }

  async getById (req, res) {
    try {
      return HttpResponse.ok(res, await userService.getById(req))
    } catch (err) {
      return HttpResponse.badRequest(res, err.message)
    }
  }

  async getSelect (req, res) {
    try {
      return HttpResponse.ok(res, await userService.getSelect())
    } catch (err) {
      return HttpResponse.badRequest(res, err.message)
    }
  }

  async getUrlPhoto (req, res) {
    try {
      const file = await userService.getUrlPhoto(req)
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

  async post (req, res) {
    try {
      return HttpResponse.ok(res, await userService.post(req))
    } catch (err) {
      return HttpResponse.badRequest(res, err.message)
    }
  }

  async put (req, res) {
    try {
      return HttpResponse.ok(res, await userService.put(req))
    } catch (err) {
      return HttpResponse.badRequest(res, err.message)
    }
  }

  async delete (req, res) {
    try {
      return HttpResponse.ok(res, await userService.delete(req))
    } catch (err) {
      return HttpResponse.badRequest(res, err.message)
    }
  }
}
