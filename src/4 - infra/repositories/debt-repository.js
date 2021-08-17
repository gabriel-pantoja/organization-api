const Debt = require('../data/models/debt-model')
const User = require('../data/models/user-model')
const Attachment = require('../data/models/attachment-model')
const Linked = require('../data/models/linked-model')
const DebtModel = require('../../3 - domain/models/debt-model')
const LinkedModel = require('../../3 - domain/models/linked-model')

module.exports = class DebtRepository {
  async get (req, res) {
    let where = {}
    if (req.query.name !== '' && req.query.name !== undefined) {
      where = { name: req.query.name }
    }
    const listIds = []
    const listDebt = []
    const listLinked = []
    await Debt.findAll({
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
          attributes: ['id', 'payment', 'checkingCopy']
        }
      ],
      attributes: ['id', 'name', 'payDay', 'price', 'isPayment'],
      where: where
    }).then(res => {
      res.forEach(item => {
        listIds.push(item.get('id'))
        listDebt.push(new DebtModel(item))
      })
    })

    await Linked.findAll({
      include: [
        {
          model: User,
          as: 'user',
          required: true,
          attributes: ['firstName', 'lastName']
        }
      ],
      where: { idDebt: listIds },
      attributes: ['idDebt', 'idUser', 'isPayment', 'checkingCopy']
    }).then(res => {
      res.forEach(item => {
        listLinked.push(new LinkedModel(item))
      })
    })

    listDebt.forEach((debt, index) => {
      debt.linkeds = listLinked.filter(item => item.idDebt === debt.id)
    })

    return listDebt
  }

  async getById (req, res) {
    return await Debt.findByPk(req.params.id)
  }

  async post (req, res) {
    const body = JSON.parse(req.body.value)

    return await Debt.create({
      name: body.name,
      idUser: body.idUser,
      payDay: body.payDay,
      price: body.price
    })

    // return await Debt.create({
    //   name: body.name,
    //   idUser: body.idUser,
    //   payDay: body.payDay,
    //   price: body.price,
    //   attachment: {
    //     payment: req.file.filename
    //   }
    // }, {
    //   include: [{
    //     model: Attachment,
    //     as: 'attachment'
    //   }]
    // })
  }

  async put (req, res) {
    const item = await Debt.findByPk(req.params.id)
    return await item.update(req.body)
  }

  async delete (req, res) {
    const item = await Debt.findByPk(req.params.id)
    return await item.destroy()
  }

  async changeStatusPayment (req, res) {
    const item = await Debt.findByPk(req.params.id)
    item.update({ isPayment: item.get('isPayment') !== true })
    return item
  }
}
