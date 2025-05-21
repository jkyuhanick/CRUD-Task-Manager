const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('task_manager', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;