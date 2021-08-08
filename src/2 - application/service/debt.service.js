const DebtRepository = require('../../4 - infra/repositories/debt.repository')

const debtRepository = new DebtRepository()

module.exports = class DebtService {
  async getAll (req, res) {
    return await debtRepository.getAll()
  }

  async getById (req, res) {
    return await debtRepository.getById(req)
  }

  async post (req, res) {
    return await debtRepository.post(req)
  }

  async put (req, res) {
    return await debtRepository.put(req)
  }

  async delete (req, res) {
    return await debtRepository.delete(req)
  }
}
