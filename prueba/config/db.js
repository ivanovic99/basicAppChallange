const Sequelize = require("sequelize")
const db = new Sequelize('postgres://localhost:5432/prueba')

module.exports = db