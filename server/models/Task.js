const { DataTypes } = require('sequelize');

const sequelize = require('../db');

const Task = sequelize.define('Task', {
    text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    priority: {
        type: DataTypes.ENUM('low', 'medium', 'high'),
        defaultValue: 'low'
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
});

module.exports = Task;