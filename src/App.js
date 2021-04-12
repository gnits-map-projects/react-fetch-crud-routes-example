import './App.css';
import React, {useState, useEffect} from "react";
import {TaskList} from "./task-list";
import {AddTask} from "./add-task";

function App(props) {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const tasksfromDb = await fetch("http://localhost:3004/tasks");
    const tasklist = await tasksfromDb.json();
    setTasks(tasklist);
  }

  const handleNewTask = async (item) => {
    //setTasks(tasks.concat(item))

    await fetch('http://localhost:3004/tasks', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    })
    fetchTasks();
  }

  const handleDelete = async (id) => {

    await fetch(`http://localhost:3004/tasks/${id}`, {
      method: 'DELETE',
    })
    fetchTasks();
  }
  return (
    <div className="App">
      <AddTask onNewTask={handleNewTask}/>
      <TaskList tasks={tasks} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
