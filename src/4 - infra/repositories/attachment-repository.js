const path = require('path')
const fs = require('fs')
const Attachment = require('../data/models/attachment-model')

module.exports = class AttachmentRepository {
  async uploadCheckingCopy (req, res) {
    const path = `${req.files[0].fieldname.replace('comprovantes/', '')}/${req.files[0].filename}`
    return await Attachment
      .update({ checkingCopy: path }, { where: { id: req.body.id } })
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
}
