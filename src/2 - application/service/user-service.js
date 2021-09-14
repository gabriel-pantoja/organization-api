const UserRepository = require('../../4 - infra/repositories/user-repository')

const userRepository = new UserRepository()

module.exports = class UserService {
  async get (req, res) {
    return await userRepository.get()
  }

  async getById (req, res) {
    return await userRepository.getById(req)
  }

  async getSelect (req, res) {
    return await userRepository.getSelect()
  }

  async getUrlPhoto (req, res) {
    return await userRepository.getUrlPhoto(req)
  }

  async post (req, res) {
    return await userRepository.post(req)
  }

  async put (req, res) {
    return await userRepository.put(req)
  }

  async delete (req, res) {
    return await userRepository.delete(req)
  }
}
