const User = require('../data/models/user.model')

module.exports = class UserRepository {
  async get (req, res) {
    return await User.findAll()
  }

  async getById (req, res) {
    return await User.findByPk(req.params.id)
  }

  async post (req, res) {
    return await User.create(req.body)
  }

  async getSelect (req, res) {
    return await User.findAll({ attributes: ['id', 'firstName', 'lastName'] })
  }

  async put (req, res) {
    const item = await User.findByPk(req.params.id)
    return await item.update(req.body)
  }

  async delete (req, res) {
    const item = await User.findByPk(req.params.id)
    return await item.destroy()
  }
}
