import './App.css';

function App() {

  const [taskText, setTaskTest] = useState('');
  const [priority, setPriority] = useState('low');

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <div className='form'>
        <label>Task:</label>
        <input id="task-text" type="text" name="task" onChange={()=> {
          setTaskTest(e.target.value)
        }}/>
        <select id="dropdown">
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
