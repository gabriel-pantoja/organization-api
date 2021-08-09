const path = require('path')
const fs = require('fs')

module.exports = class AttachmentRepository {
  async get (req, res) {
    const file = path.join('uploads', req.params.file)
    if (fs.existsSync(file)) {
      const buff = fs.readFileSync(file)
      const img = Buffer.from(buff, 'base64')
      return img
    } else {
      return null
    }
  }
}
