
const { Sequelize, DataTypes } = require('sequelize')
const config = require('../config/db.config')
const User = require('./user-model')
const Attachment = require('./attachment-model')

const sequelize = new Sequelize(config)

const Debt = sequelize.define('debt', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  idUser: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  idAttachment: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  payDay: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true
    },
    get () {
      return require('moment')(this.getDataValue('payDay')).format('DD/MM/YYYY')
    }
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    validate: {
      notNull: true
    }
  },
  isPayment: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  }
})

Debt.belongsTo(User, { foreignKey: 'idUser', as: 'responsible' })
Debt.belongsTo(Attachment, { foreignKey: 'idAttachment', as: 'attachment' })

module.exports = Debt
