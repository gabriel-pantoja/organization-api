const Debt = require('../data/models/debt.model')
const User = require('../data/models/user.model')

module.exports = class DebtRepository {
  async get (req, res) {
    let where = {}

    if (req.query.name !== '' && req.query.name !== undefined) {
      where = { name: req.query.name }
    }
    return await Debt.findAll({
      include: [{
        model: User,
        as: 'responsible',
        required: true,
        attributes: ['firstName', 'lastName']
      }],
      attributes: ['id', 'name', 'payDay', 'price'],
      where: where
    })
  }

  async getById (req, res) {
    return await Debt.findByPk(req.params.id)
  }

  async post (req, res) {
    return await Debt.create(req.body)
  }

  async put (req, res) {
    const item = await Debt.findByPk(req.params.id)
    return await item.update(req.body)
  }

  async delete (req, res) {
    const item = await Debt.findByPk(req.params.id)
    return await item.destroy()
  }
}
