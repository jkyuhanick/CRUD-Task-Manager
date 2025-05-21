import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const [taskText, setTaskTest] = useState('');
  const [priority, setPriority] = useState('');

  useEffect(() => {
    Axios.get('http://localhost:3001/api/tasks').then((response) => {
      console.log(response.data);
    })
  }, [])

  const addTask = () => {
    Axios.post('http://localhost:3001/api/tasks', {
      text: taskText,
      priority: priority
    }).then(() => {
      alert('Task added');
    }).catch((error) => {
      console.error('Error adding task: ', error);
    })
  }

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <div className='form'>
        <label>Task:</label>
        <input id="task-text" type="text" name="task" onChange={(e) => {
          setTaskTest(e.target.value)
        }}/>
        <select id="dropdown" name="priority" onChange={(e) => {
          setPriority(e.target.value)}}
          value ={priority} 
        >
          <option value="">--Select a priority--</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>
    </div>
  );
}

export default App;
