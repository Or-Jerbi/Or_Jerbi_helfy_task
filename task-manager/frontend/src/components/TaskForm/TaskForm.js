import React from 'react'
import { useState } from "react";

function TaskForm({ onAddTask }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("low");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        if (!title.trim() || !description.trim()) {
            setError("Title and description are required");
            return;
        }
        onAddTask({ title: title.trim(), description: description.trim(), priority });
        setTitle("");
        setDescription("");
        setPriority("low");
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Add Task</h1>
            <span>Title:</span>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <span>Description:</span>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <span>Priority:</span>
            <select value={priority} onChange={(e) => setPriority(e.target.value)}   required>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <button>Add Task</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    </div>
  )
}

export default TaskForm