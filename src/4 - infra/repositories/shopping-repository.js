const Shopping = require('../data/models/shopping-model')

module.exports = class ShoppingRepository {
  async get (req, res) {
    return await Shopping.findAll()
  }

  async getById (req, res) {
    return await Shopping.findByPk(req.params.id)
  }

  async post (req, res) {
    return await Shopping.create(req.body)
  }

  async put (req, res) {
    const item = await Shopping.findByPk(req.params.id)
    return await item.update(req.body)
  }

  async delete (req, res) {
    const item = await Shopping.findByPk(req.params.id)
    return await item.destroy()
  }

  async deleteAll (req, res) {
    return await Shopping.destroy({ where: req.body })
  }
}
