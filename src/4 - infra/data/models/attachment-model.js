
const { Sequelize, DataTypes } = require('sequelize')
const config = require('../config/db.config')
const sequelize = new Sequelize(config)

const Attachment = sequelize.define('attachment', {
  payment: {
    type: DataTypes.STRING,
    allowNull: true
  },
  checkingCopy: {
    type: DataTypes.STRING,
    allowNull: true
  }
})

module.exports = Attachment
