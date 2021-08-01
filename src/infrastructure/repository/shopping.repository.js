const shopping = require('../data/models/shopping');

module.exports = {
    getAll: async function (req, res) {
        return await shopping.findAll();
    },
    getById: async function (req, res) {
        return await shopping.findByPk(req.params.id)
    },
    post: async function (req, res) {
        return await shopping.create(req.body);
    },
    put: async function (req, res) {
        const item = await shopping.findByPk(req.params.id);
        return await item.update(req.body);
    },
    delete: async function (req, res) {
        const item = await shopping.findByPk(req.params.id);
        return await item.destroy();
    },
    deleteAll: async function (req, res) {
        return await shopping.destroy({ where: req.body })
    }
}