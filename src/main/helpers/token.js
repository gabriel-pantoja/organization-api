require('dotenv').config()
const jwt = require('jsonwebtoken')

module.exports = {
  check: function (req, res, next) {
    const token = req.get('Authorization')
    if (!token) return res.status(401).json({ auth: false, message: 'No token.' })

    jwt.verify(token, process.env.KEY_JWT, function (err, decoded) {
      if (err) return res.status(500).json({ token: { auth: false, message: 'Invalid token' } })
      next()
    })
  }
}
