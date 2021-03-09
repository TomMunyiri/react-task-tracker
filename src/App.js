import { useState } from 'react'
import AddTask from './components/AddTask';
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  //state is immutable that's why we use setTasks
  //this is put here in order to make it reusable in other components
  //state gets passed down
  const [tasks, setTasks] = useState([]);

  const [showAddTask, setShowAddTask] = useState(false)

  //delete a task
  //actions get passed up
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder
  const toogleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header
        title='My Task Tracker'
        onAddClick={() => setShowAddTask(!showAddTask)}
        showAddTask={showAddTask}
      />
      {showAddTask && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} toogleReminder={toogleReminder} />) : ("No tasks")}
    </div>
  );
}

export default App;
