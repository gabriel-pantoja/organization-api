
const { Sequelize, DataTypes } = require('sequelize')
const config = require('../config/db.config')
const sequelize = new Sequelize(config)
const User = require('./user-model')
const Debt = require('./debt-model')

const Linked = sequelize.define('linked', {
  idUser: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  idDebt: {
    type: DataTypes.INTEGER,
    references: {
      model: Debt,
      key: 'id'
    }
  },
  isPayment: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  checkingCopy: {
    type: DataTypes.STRING,
    allowNull: true
  }
})

Linked.removeAttribute('id')
Linked.belongsTo(User, { foreignKey: 'idUser', as: 'user' })
Linked.belongsTo(Debt, { foreignKey: 'idDebt', as: 'debt' })

module.exports = Linked
