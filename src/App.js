import { useState } from "react";
import AddForm from "./components/AddForm";
import UpdateForm from "./components/UpdateForm";
import Todo from "./components/Todo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [updateTask, setUpdateTask] = useState("");

  //-----------------  Add task ----------------

  const addTask = (e) => {
    // e.preventDefault();
    if (newTask.trim()) {
      const newEntry = {
        id: task.length + 1,
        title: newTask,
        status: false,
      };
      setTask([...task, newEntry]);
      setNewTask("");
    }
  };

  //-----------------  Mark task ----------------

  const markDone = (id) => {
    const newTask = task.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setTask(newTask);
  };

  //-----------------  Delete task ----------------

  const deleteTask = (id) => {
    const updatedTask = [...task].filter((task) => task.id !== id);
    setTask(updatedTask);
  };

  const changeTask = (e) => {
    const newEntry = {
      id: updateTask.id,
      title: e.target.value,
      status: updateTask.status,
    };
    setUpdateTask(newEntry);
  };

  //-----------------  Update task ----------------

  const updateTodo = () => {
    const filter = [...task].filter((task) => task.id !== updateTask.id);
    const updatedObj = [...filter, updateTask];
    setTask(updatedObj);
    setUpdateTask("");
  };
  const cancelUpdate = () => {
    setUpdateTask("");
  };

  return (
    <div className="App container">
      <br />
      <br />
      <h2>To Do List App </h2>
      <br />
      <br />

      {updateTask ? (
        <UpdateForm
          updateTask={updateTask}
          changeTask={changeTask}
          updateTodo={updateTodo}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddForm newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
      )}

      <Todo
        task={task}
        markDone={markDone}
        setUpdateTask={setUpdateTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
