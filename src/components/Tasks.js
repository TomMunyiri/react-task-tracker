import {useState} from 'react'
const Tasks = () => {
    //state is immutable that's why we use setTasks
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
    ])
    return (
        <>
            {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks
