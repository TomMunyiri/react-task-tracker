import { FaTimes } from 'react-icons/fa'
const Task = ({ task, onDelete, toogleReminder }) => {
    return (
        <div className='task' onDoubleClick={() => toogleReminder(task.id)}>
            <h3>{task.text}<FaTimes style={{ color: 'red', cursor: 'pointer' }}
                onClick={() => onDelete(task.id)} /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
