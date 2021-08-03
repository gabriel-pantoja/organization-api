
const { Sequelize, Model, DataTypes } = require("sequelize");
const config = require('../config/db.config');
const sequelize = new Sequelize(config);

const User = sequelize.define("debt", {
  name: {
    type: DataTypes.STRING, allowNull: false, validate: {
      notNull: true,
      notEmpty: true
    }
  },
  responsible: {
    type: DataTypes.STRING, allowNull: false, validate: {
      notNull: true,
      notEmpty: true
    }
  },
  payDay: {
    type: DataTypes.DATE, allowNull: false, validate: {
      notNull: true,
      notEmpty: true
    }
  },
  price: {
    type: DataTypes.DECIMAL, allowNull: false, validate: {
      notNull: true
    }
  }
});

module.exports = User