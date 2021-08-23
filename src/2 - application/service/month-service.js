const MonthRepository = require('../../4 - infra/repositories/month-respository')

const monthRepository = new MonthRepository()

module.exports = class MonthService {
  async getSelect (req, res) {
    return await monthRepository.getSelect()
  }
}
