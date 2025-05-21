const express = require('express');
const app = express();
const sequelize = require('./db');
const Task = require('./models/Task');

// Connect to DB
sequelize.sync().then(() => {
  console.log('Database synced');
});

app.listen(3001, () => {
    console.log('Running on port 3001');
})