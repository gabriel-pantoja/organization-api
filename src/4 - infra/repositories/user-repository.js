const path = require('path')
const fs = require('fs')
const User = require('../data/models/user-model')

module.exports = class UserRepository {
  async get (req, res) {
    return await User.findAll()
  }

  async getById (req, res) {
    return await User.findByPk(req.params.id)
  }

  async getSelect (req, res) {
    return await User.findAll({ attributes: ['id', 'firstName', 'lastName'] })
  }

  async getUrlPhoto (req, res) {
    const item = await User.findByPk(req.query.id, { attributes: ['pathPhoto'] })
    if (item !== null) {
      const file = path.join('uploads/photo', item.get().pathPhoto)
      if (fs.existsSync(file)) {
        const buff = fs.readFileSync(file)
        const img = Buffer.from(buff, 'base64')
        return img
      } else {
        return null
      }
    } else {
      return null
    }
  }

  async post (req, res) {
    const body = JSON.parse((req.body.value).replace(/"\s+|\s+"/g, '"'))
    const path = `${req.files[0].filename}`
    return await User.create({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      pathPhoto: path
    })
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
