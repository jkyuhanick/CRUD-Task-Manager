const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('task_manager', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize;