const ShoppingRepository = require('../../4 - infra/repositories/shopping.repository')

const shoppingRepository = new ShoppingRepository()
module.exports = class ShoppingService {
  async getAll (req, res) {
    return await shoppingRepository.getAll()
  }

  async getById (req, res) {
    return await shoppingRepository.getById(req)
  }

  async post (req, res) {
    return await shoppingRepository.post(req)
  }

  async put (req, res) {
    return await shoppingRepository.put(req)
  }

  async delete (req, res) {
    return await shoppingRepository.delete(req)
  }

  async deleteAll (req, res) {
    return await shoppingRepository.deleteAll(req)
  }
}
