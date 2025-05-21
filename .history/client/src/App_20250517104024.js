import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <input type="text" name="task"/>
      <select id="dropdown">
        <option value="">--Select a priority--</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
}

export default App;
