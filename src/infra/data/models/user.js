
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
  lastLogin: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      notNull: true
    }
  },
  like: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notNull: true
    }
  }
})

module.exports = User
