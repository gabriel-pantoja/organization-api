const LinkedRepository = require('../../4 - infra/repositories/linked-repository')

const linkedRepository = new LinkedRepository()

module.exports = class LinkedService {
  async get (req, res) {
    return await linkedRepository.get(req)
  }

  async post (req, res) {
    return await linkedRepository.post(req)
  }

  async delete (req, res) {
    return await linkedRepository.delete(req)
  }

  async download (req, res) {
    return await linkedRepository.download(req)
  }

  async uploadCheckingCopyUser (req, res) {
    return await linkedRepository.uploadCheckingCopyUser(req)
  }

  async changeStatusPaymentUser (req, res) {
    return await linkedRepository.changeStatusPaymentUser(req)
  }
}
