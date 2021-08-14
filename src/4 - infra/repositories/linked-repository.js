const path = require('path')
const fs = require('fs')

const Linked = require('../data/models/linked-model')

module.exports = class LinkedRepository {
  async download (req, res) {
    const file = path.join('uploads/comprovantes-usuario', req.params.file)
    if (fs.existsSync(file)) {
      const buff = fs.readFileSync(file)
      const img = Buffer.from(buff, 'base64')
      return img
    } else {
      return null
    }
  }

  async uploadCheckingCopyUser (req, res) {
    return await Linked
      .update(
        { checkingCopy: req.file.filename, isPayment: true },
        { where: { idUser: req.body.idUser } })
  }

  async changeStatusPaymentUser (req, res) {
    let where = {}
    where = { idDebt: req.query.idDebt, idUser: req.query.idUser }
    const item = await Linked.update({ isPayment: req.query.status }, { where: where })
    return item
  }
}
