
const { Sequelize, DataTypes } = require('sequelize')
const config = require('../config/db.config')
const sequelize = new Sequelize(config)

const Month = sequelize.define('month', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true
    }
  }
})

module.exports = Month
