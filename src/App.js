import logo from "./logo.svg";
import Welcome from "./Components/Welcome";
import TimeInterval from "./Components/TimeInterval";
import "./App.css";
import ToDoList from "./Components/To-Do List/ToDoList";

function App() {
  return (
    <div className="App">
      <Welcome />
      <TimeInterval />
      <ToDoList />
    </div>
  );
}

export default App;
