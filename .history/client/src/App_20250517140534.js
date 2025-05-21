import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [taskText, setTaskTest] = useState('');
  const [priority, setPriority] = useState('');

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
        <button>Add Task</button>
      </div>
    </div>
  );
}

export default App;
