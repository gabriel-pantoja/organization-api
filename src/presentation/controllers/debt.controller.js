const debt = require('../../application/service/debt.service')

module.exports = {
  getAll: async function (req, res) {
    try {
      return res.json(await debt.getAll())
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  },
  getById: async function (req, res) {
    try {
      return res.json(await debt.getById(req))
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  },
  post: async function (req, res) {
    try {
      return res.json(await debt.post(req))
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  },
  put: async function (req, res) {
    try {
      return res.json(await debt.put(req))
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  },
  delete: async function (req, res) {
    try {
      return res.json(await debt.delete(req))
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  }
}
