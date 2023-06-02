import React, { useState } from "react";
import "./app.css";

function App() {
  const [title, setTitle] = useState({ title: "" , completed: false});
 

  const [task, setTask] = useState([
    {
      id: 1,
      title: "Ir a cine",
      completed: false,
    },
    {
      id: 2,
      title: "Limpiar el baño",
      completed: false,
    },
    {
      id: 3,
      title: "ir donde la novia",
      completed: false,
    },
  ]);
  
  const completeTasks = task.filter((todo) => todo.completed === true).length
  const pendingTasks = task.length - completeTasks
  

  const handleChange = ({ target }) => {
    setTitle({ ...title, [target.name]: target.value });
  };

  const addTask = (e) => {
    e.preventDefault();
    if (title.title !== "") {
      const todo = title;
      todo.id = task.length + 1;
      setTask([...task, todo]);
      setTitle("");
      
    }else{
      alert("Write something man")
    }
    
  };

  const deleteTask = (id) => {
    const newList = task.filter((taskk) => taskk.id !== id);
    setTask(newList);
  };

  const updateTask = (id) => {
    const update = [...task];
    let todo = update.find((todo) => todo.id === id);
    todo.completed = !todo.completed
    setTask(update);
  };

  return (
    <div className="container">
      <h1>To do List</h1>
      <div>
        <form onSubmit={addTask}>
          <input
            type="text"
            name="title"
            value={title.title}
            placeholder="Write the new Task"
            onChange={handleChange}
          />
          <button type="submit">Send</button>
        </form>
      </div>

      <div className="containerTask">
        <h2>Task pending: {pendingTasks}</h2>
        {task.map((taskk) => {
          if (!taskk.completed) {
            return (
              <div className="containermap" key={taskk.id}>
                <p>{taskk.title}</p>
                <div className="divfuncions">
                  <img src="./src/assets/check.svg" alt="check.svg" 
                  onClick={() => updateTask(taskk.id)}/>
                  <img
                    src="./src/assets/trash.svg"
                    alt="close.svg"
                    onClick={() => deleteTask(taskk.id)}
                  />
                </div>
              </div>
            );
          }
        })}
      </div>

      <div className="containerTask">
        
        <h2>Task Completed:{completeTasks}</h2>
        {task.map((taskk) => {
          if (taskk.completed) {
            return (
              <div className="containermap" key={taskk.id}>
                <p>{taskk.title}</p>
                <div className="divfuncions">
                  <img src="./src/assets/close.svg" alt="check.svg" 
                  onClick={() => updateTask(taskk.id)}/>
                  <img
                    src="./src/assets/trash.svg"
                    alt="close.svg"
                    onClick={() => deleteTask(taskk.id)}
                  />
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default App;
