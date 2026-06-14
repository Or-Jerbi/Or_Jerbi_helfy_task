import logo from './logo.svg';
import './App.css';
import TaskForm from './components/TaskForm/TaskForm';
import * as api from "./services/api";
import {useEffect, useState} from "react";
import DisplayTasks from './components/DisplayTasks/DisplayTasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editTask, setEditTask] = useState(null);

const fetchTasks = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await api.getTasks(); 
        setTasks(data);
      }
      catch (error) {
        setError(error.message);
      }
      finally {
        setLoading(false);
      }

    };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async (task) => {
    try {
      await api.createTask(task);
      fetchTasks();
    } catch (error) {
      console.error("Error creating task:", error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.deleteTask(id);
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error.message);
    }
  };

  const handleToggle = async (id) => {
    try {
      await api.toggleTask(id);
      fetchTasks();
    } catch (error) {
      console.error("Error toggling task:", error.message);
    }
  };

  // const handleEdit = async (id,data) => {
  //   try {
  //       await api.updateTask(id, data);
  //       await fetchTasks();
  //       setTaskToEdit(null);
  //   }
  //   catch (error) {
  //       console.error("Error updating task:", error.message);
  //   }
  // }

  return (
    <div className="App">
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <DisplayTasks tasks={tasks} onDelete={handleDelete} onToggle={handleToggle} />
      <TaskForm onAddTask={handleAddTask} />
    </div>
  );
}

export default App;
