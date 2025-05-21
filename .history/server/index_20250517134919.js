const express = require('express');
const app = express();
const sequelize = require('./db');
const Task = require('./models/Task');

// Connect to DB
sequelize.sync().then(() => {
  console.log('Database synced');
});

// Test route with test db insert
app.get('/', async (req, res) => {
    try {
        const task = await Task.create({
            text: 'Practice sequelize insert',
            priority: 'High',
            completed: false
        });
        res.json(task);
    } catch(err) {
        console.log(`Error inserting task: `, err);
        res.status(500).send('Error creating task');
    }
});

app.listen(3001, () => {
    console.log('Running on port 3001');
})