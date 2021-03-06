const AttachmentRepository = require('../../4 - infra/repositories/attachment-repository')

const attachmentRepository = new AttachmentRepository()

module.exports = class AttachmentService {
  async uploadCheckingCopy (req, res) {
    return await attachmentRepository.uploadCheckingCopy(req)
  }

  async download (req, res) {
    return await attachmentRepository.download(req)
  }
}
