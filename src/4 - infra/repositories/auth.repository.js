require('dotenv').config()
const User = require('../data/models/user')

module.exports = {
  login: async function (req, res) {
    const email = req.body.email
    const user = await User.findOne({ where: { email } })
    if (user === null) return null
    return user
  }
}
