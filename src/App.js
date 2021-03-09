import { useState, useEffect } from 'react'
import AddTask from './components/AddTask';
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  //state is immutable that's why we use setTasks
  //this is put here in order to make it reusable in other components
  //state gets passed down
  const [tasks, setTasks] = useState([]);

  //hard coded tasks
  /* const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true
    },
    {
      id: 3,
      text: "Finish Next JS course",
      day: "Mar 8 at 11am",
      reminder: true
    }
  ]); */

  const [showAddTask, setShowAddTask] = useState(false)

  //load tasks from mock server when the app loads
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  //fetch tasks from mock server
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  //delete a task
  //actions get passed up
  //delete on backend
  const deleteTask = async(id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }
  //delete function for hard coded tasks
  /* const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  } */

  //toggle reminder
  const toogleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  //add task
  const addTask = async(task) => {
    const res =await fetch('http://localhost:5000/tasks',{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(task)
    })

    const data=await res.json()

    setTasks([...tasks,data])
    //for hard coded tasks. creates a random id. function does need to be async
    /* const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask]) */
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
