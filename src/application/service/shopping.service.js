const shopping = require('../../infrastructure/repository/shopping.repository');


module.exports = {
    getAll: async function () {
        return await shopping.getAll();
    },
    getById: async function (req, res) {
        return await shopping.getById(req);
    },
    post: async function (req, res) {
        return await shopping.post(req);
    },
    put: async function (req, res) {
        return await shopping.put(req);
    },
    delete: async function (req, res) {
        return await shopping.delete(req);
    },
    deleteAll: async function (req, res) {
        return await shopping.deleteAll(req);
    }
}