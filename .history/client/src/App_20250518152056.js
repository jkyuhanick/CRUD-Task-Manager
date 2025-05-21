import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const [taskText, setTaskTest] = useState('');
  const [priority, setPriority] = useState('');
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/tasks').then((response) => {
      setTaskList(response.data);
    })
  }, [])

  const addTask = () => {
    Axios.post('http://localhost:3001/api/tasks', {
      text: taskText,
      priority: priority
    }).then(() => {
      setTaskList([ ...taskList, {text: taskText, priority: priority}]);
    }).catch((error) => {
      console.error('Error adding task: ', error);
    })
  }

  const deleteTask = () => {
    Axios.delete(`http://localhost:3001/api/tasks/${taskId}`);
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
        <h1>To Do:</h1>
        
          {taskList.map((val) => {
            return (
              <>
                <div className={`card priority-${val.priority}`}>
                  <h2>{val.text} </h2> 
                  <p>Priority: {val.priority}</p>

                  <button>Mark as Completed</button>
                  <button>Delete</button>
                  <div className='update'>
                    <input type='text' id='update-input' defaultValue={`${val.text}`}/>
                    <button id='update-btn'>Update Task</button>
                  </div>
                </div>
              </>
            )
          })}

      </div>
    </div>
  );
}

export default App;
