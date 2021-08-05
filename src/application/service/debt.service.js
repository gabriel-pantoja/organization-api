const debt = require('../../infra/repositories/debt.repository');

module.exports = {
  getAll: async function () {
    return await debt.getAll();
  },
  getById: async function (req, res) {
    return await debt.getById(req);
  },
  post: async function (req, res) {
    return await debt.post(req);
  },
  put: async function (req, res) {
    return await debt.put(req);
  },
  delete: async function (req, res) {
    return await debt.delete(req);
  },
  deleteAll: async function (req, res) {
    return await debt.deleteAll(req);
  }
}