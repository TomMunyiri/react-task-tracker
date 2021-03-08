import Task from "./Task"

const Tasks = ({ tasks,onDelete,toogleReminder }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} toogleReminder={toogleReminder}/>
            ))}
        </>
    )
}

export default Tasks
