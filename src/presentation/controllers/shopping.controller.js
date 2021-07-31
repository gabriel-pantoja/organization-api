const shopping = require('../../application/service/shopping.service');

module.exports = {
  getAll: async function (req, res) {
    try {
      return res.json(await shopping.getAll());
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },
  getById: async function (req, res) {
    try {
      return res.json(await shopping.getById(req));
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },
  post: async function (req, res) {
    try {
      return res.json(await shopping.post(req));
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },
  put: async function (req, res) {
    try {
      return res.json(await shopping.put(req));
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },
  delete: async function (req, res) {
    try {
      return res.json(await shopping.delete(req));
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },
  deleteAll: async function (req, res) {
    try {
      return res.json(await shopping.deleteAll(req));
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}