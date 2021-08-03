const debt = require('../data/models/debt');

module.exports = {
  getAll: async function (req, res) {
    return await debt.findAll();
  },
  getById: async function (req, res) {
    return await debt.findByPk(req.params.id)
  },
  post: async function (req, res) {
    return await debt.create(req.body);
  },
  put: async function (req, res) {
    const item = await debt.findByPk(req.params.id);
    return await item.update(req.body);
  },
  delete: async function (req, res) {
    const item = await debt.findByPk(req.params.id);
    return await item.destroy();
  }
}