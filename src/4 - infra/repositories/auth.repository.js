require('dotenv').config()
const User = require('../data/models/user.model')

module.exports = class AuthRepository {
  async login (req, res) {
    const email = req.body.email
    const user = await User.findOne({ where: { email } })
    if (user === null) return null
    return user
  }
}
