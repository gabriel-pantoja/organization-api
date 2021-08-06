require('dotenv').config()
module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.HOST,
  dialect: 'mysql',
  define: {
    timestamps: false,
    // prevent sequelize from pluralizing table names
    freezeTableName: true
  }
}
