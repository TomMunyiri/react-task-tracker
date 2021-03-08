import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  //state is immutable that's why we use setTasks
  //this is put here in order to make it reusable in other components
  //state gets passed down
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Mar 8 at 11am",
      reminder: true,
    },
    {
      id: 2,
      text: "Finish Next JS course",
      day: "Mar 8 at 11am",
      reminder: true,
    },
    {
      id: 3,
      text: "Go to the gym",
      day: "Mar 8 at 11am",
      reminder: false,
    },
  ]);

  //delete a task
  //actions get passed up
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder
  const toogleReminder=()=>{
    
  }

  return (
    <div className="container">
      <Header title='My Task Tracker' />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : "No tasks"}
    </div>
  );
}

export default App;
