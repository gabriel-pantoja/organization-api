const ShoppingService = require('../../2 - application/service/shopping.service')
const HttpResponse = require('../../3 - domain/models/http-response.model')

const shoppingService = new ShoppingService()
module.exports = class ShopppingController {
  async getAll (req, res) {
    try {
      return HttpResponse.ok(res, await shoppingService.getAll())
    } catch (err) {
      return HttpResponse.badRequest(res, err.message)
    }
  }

  async getById (req, res) {
    try {
      return HttpResponse.ok(res, await shoppingService.getById(req))
    } catch (err) {
      return HttpResponse.badRequest(res, err.message)
    }
  }

  async post (req, res) {
    try {
      return HttpResponse.ok(res, await shoppingService.post(req))
    } catch (err) {
      return HttpResponse.badRequest(res, err.message)
    }
  }

  async put (req, res) {
    try {
      return HttpResponse.ok(res, await shoppingService.put(req))
    } catch (err) {
      return HttpResponse.badRequest(res, err.message)
    }
  }

  async delete (req, res) {
    try {
      return HttpResponse.ok(res, await shoppingService.delete(req))
    } catch (err) {
      return HttpResponse.badRequest(res, err.message)
    }
  }

  async deleteAll (req, res) {
    try {
      return HttpResponse.ok(res, await shoppingService.deleteAll(req))
    } catch (err) {
      return HttpResponse.badRequest(res, err.message)
    }
  }
}
