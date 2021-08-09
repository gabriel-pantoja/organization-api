const AttachmentRepository = require('../../4 - infra/repositories/attachment-repository')

const attachmentRepository = new AttachmentRepository()

module.exports = class AttachmentService {
  async get (req, res) {
    return await attachmentRepository.get(req)
  }
}
