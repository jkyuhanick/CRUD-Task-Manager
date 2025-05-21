const express = require('express');
const app = express();
const Sequelize = require('./db');
const Task = require('./models/Task');

// Connect to DB


app.listen(3001, () => {
    console.log('Running on port 3001');
})