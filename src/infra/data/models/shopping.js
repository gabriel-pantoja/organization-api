
const { Sequelize, DataTypes } = require('sequelize')
const config = require('../config/db.config')
const sequelize = new Sequelize(config)

const Shopping = sequelize.define('shopping', {
  item: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true
    }
  }
})

module.exports = Shopping
