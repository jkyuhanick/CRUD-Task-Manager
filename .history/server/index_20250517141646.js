const express = require('express');
const app = express();
const sequelize = require('./db');
const Task = require('./models/Task');

app.use(express.json());

// Connect to DB
sequelize.sync().then(() => {
  console.log('Database synced');
});

// Insert task into DB
app.post('/api/insert', async (req, res) => {
    try {
        const { text, priority } = req.body;

        const newTask = await Task.create({
            title,
            priority,
            completed: false 
        });
        res.status(201).json(newTask);
    } catch(err) {
        console.error('Error inserting new task: ', err);
        res.status(500).json({error: 'Error inserting new task'});
    }
});

app.listen(3001, () => {
    console.log('Running on port 3001');
})