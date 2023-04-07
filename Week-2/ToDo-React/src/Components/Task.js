import React from "react";
import {useState} from "react";


function TaskProcess({ todo, setTodo, setStatus }) {
  const [select, setSelect] = useState("selected", "", "");

  const clearCompleted = (e) => {
    setTodo(todo.filter((todo) => todo.isCompleted === false));
  };

  const unCompleted = todo.filter((check) => check.isCompleted === false);

  const selectedTask = (e) => {
    switch (e.target.id) {
      case "All":
        setSelect(["selected", "", ""]);
        setStatus("All");
        break;
      case "Active":
        setSelect(["", "selected", ""]);
        setStatus("Active");
        break;
      case "Completed":
        setSelect(["", "", "selected"]);
        setStatus("Completed");
        break;
      default:
    }
  };
  return (
    <div>
      <footer className='footer'>
        <br></br><br></br>

        <span className='todo-count'>
          <strong>{unCompleted.length} </strong>
          items left
        </span>
        <ul className='filters'>
          <li>
            <a className={select[0]} id='All' onClick={selectedTask}>
              All
            </a>
          </li>
          <li>
            <a className={select[1]} id='Active' onClick={selectedTask}>
              Active
            </a>
          </li>
          <li>
            <a className={select[2]} id='Completed' onClick={selectedTask}>
              Completed
            </a>
          </li>
        </ul>
        {todo.length > unCompleted.length ? (
          <button className='clear-completed' onClick={clearCompleted}>
            Clear completed
          </button>
        ) : (
          ""
        )}
      </footer>
    </div>
  );
}

export default TaskProcess;