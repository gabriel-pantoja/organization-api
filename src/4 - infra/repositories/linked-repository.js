const path = require('path')
const fs = require('fs')
const DebtModel = require('../../3 - domain/models/debt-model')
const LinkedModel = require('../../3 - domain/models/linked-model')
const User = require('../data/models/user-model')
const Debt = require('../data/models/debt-model')
const Linked = require('../data/models/linked-model')

module.exports = class LinkedRepository {
  async get (req, res) {
    const listIds = []
    const listDebt = []
    const listLinked = []
    let where = {}
    if (req.query.monthAndYear !== '' && req.query.monthAndYear !== undefined) {
      where = { monthAndYear: req.query.monthAndYear }
    }
    await Debt.findAll({
      attributes: ['id', 'name'],
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
      attributes: ['idDebt', 'idUser']
    }).then(res => {
      res.forEach(elemt => {
        listLinked.push(new LinkedModel(elemt))
      })
    })

    listDebt.forEach((debt, index) => {
      debt.linkeds = listLinked.filter(item => item.idDebt === debt.id)
    })

    return listDebt
  }

  async post (req, res) {
    return await Linked.create(req.body)
  }

  async delete (req, res) {
    return await Linked.destroy({ where: req.body })
  }

  async download (req, res) {
    const file = path.join(`uploads/${req.query.type}`, req.query.file)
    if (fs.existsSync(file)) {
      const buff = fs.readFileSync(file)
      const img = Buffer.from(buff, 'base64')
      return img
    } else {
      return null
    }
  }

  async uploadCheckingCopyUser (req, res) {
    const path = `${req.files[0].fieldname.replace('comprovantes-usuario/', '')}/${req.files[0].filename}`
    return await Linked
      .update(
        { checkingCopy: path, isPayment: true },
        { where: { idUser: req.body.idUser } })
  }

  async changeStatusPaymentUser (req, res) {
    let where = {}
    where = { idDebt: req.query.idDebt, idUser: req.query.idUser }
    const item = await Linked.update({ isPayment: req.query.status }, { where: where })
    return item
  }
}
