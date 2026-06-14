import {React}from 'react'
import TaskItem from '../TaskItem/TaskItem';
import '../../styles/DisplayTasks.css'

function DisplayTasks({ tasks, onDelete, onToggle }) {
    if (!tasks || tasks.length === 0) {
        return <p>No tasks to display</p>;
    }


    const animationDuration = `${tasks.length * 10}s`;

  return (
    <div className="displayTasksContainer">
        <h1>Display Tasks</h1>

    <div className="carousel-track" style={{ animationDuration }}>
        {tasks.map((task, i) => (
            <div key={`a-${i}`} className="carousel-item">
                <TaskItem task={task} onDelete={onDelete} onToggle={onToggle} />
            </div>
        ))}
        {tasks.map((task, i) => (
            <div key={`b-${i}`} className="carousel-item">
                <TaskItem task={task} onDelete={onDelete} onToggle={onToggle} />
            </div>
        ))}
    </div>
    </div>
  )
}

export default DisplayTasks