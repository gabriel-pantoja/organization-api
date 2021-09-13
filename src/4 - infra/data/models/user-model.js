
const { Sequelize, DataTypes } = require('sequelize')
const config = require('../config/db.config')
const sequelize = new Sequelize(config)

const User = sequelize.define('user', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  pathPhoto: {
    type: DataTypes.STRING,
    allowNull: true
  }
})

module.exports = User
