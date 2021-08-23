const Month = require('../data/models/month-model')

module.exports = class MonthRepository {
  async getSelect (req, res) {
    return await Month.findAll()
  }
}
