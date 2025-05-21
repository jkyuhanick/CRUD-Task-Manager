const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./db');
const Task = require('./models/Task');

app.use(cors());
app.use(express.json());

// Connect to DB
sequelize.sync().then(() => {
  console.log('Database synced');
});

// Get all tasks from DB
app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

// Insert task into DB
app.post('/api/tasks', async (req, res) => {
    try {
        const { text, priority } = req.body;

        const newTask = await Task.create({
            text,
            priority,
            completed: false 
        });
        res.status(201).json(newTask);
    } catch(err) {
        console.error('Error inserting new task: ', err);
        res.status(500).json({error: 'Error inserting new task'});
    }
});

// Delete task from DB
app.delete('api/tasks/:id', async (req, res) => {
    try {
        const taskId = req.params.id;

        const deleted = await Task.destroy({
            where : { id: taskId},
        });

        if(deleted){
            res.json({message: 'Task deleted successfully'})
        } else {
            res.status(404).json({error: 'Task not found'})
        }
    } catch(err) {
        console.error('Error deleting task: ', err);
        res.status(500).json({error: 'Error deleting task'});
    }
});

app.listen(3001, () => {
    console.log('Running on port 3001');
})