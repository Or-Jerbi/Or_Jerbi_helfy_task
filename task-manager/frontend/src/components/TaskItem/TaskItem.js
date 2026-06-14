import React from 'react'

function TaskItem({ task, onDelete, onToggle}) {
  return (
    <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>Priority: {task.priority}</p>
        <p>Completed: {task.completed ? "Yes" : "No"}</p>
        <p>Created At: {new Date(task.createdAt).toLocaleString()}</p>
        <button onClick={() => onToggle(task.id)}>Toggle Completed</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  )
}

export default TaskItem