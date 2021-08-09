const Debt = require('../data/models/debt-model')
const User = require('../data/models/user-model')
const Attachment = require('../data/models/attachment-model')

module.exports = class DebtRepository {
  async get (req, res) {
    let where = {}

    if (req.query.name !== '' && req.query.name !== undefined) {
      where = { name: req.query.name }
    }
    return await Debt.findAll({
      include: [
        {
          model: User,
          as: 'responsible',
          required: true,
          attributes: ['firstName', 'lastName']
        },
        {
          model: Attachment,
          as: 'attachment',
          required: true,
          attributes: ['payment', 'checkingCopy']
        }
      ],
      attributes: ['id', 'name', 'payDay', 'price'],
      where: where
    })
  }

  async getById (req, res) {
    return await Debt.findByPk(req.params.id)
  }

  async post (req, res) {
    const body = JSON.parse(req.body.value)
    body.attachmentPayment = req.file.filename
    return await Debt.create(body)
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
