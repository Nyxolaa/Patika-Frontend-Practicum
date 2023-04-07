import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Header from './Components/Header.js';
import AddTodo from "./Components/ToDo.js";
import TaskList from "./Components/TaskList";
import TaskProcess from "./Components/Task.js";

function App() {
  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState("all");

  return (
    <div className="container App">
      <br></br>

    {/* <Header />
    <br></br> */}

      <section className='todoapp'>
        <header className='header'>
            <h1>todos</h1>
            <AddTodo todo={todo} setTodo={setTodo} />
        </header>
        <TaskList todo={todo} setTodo={setTodo} status={status} />
        <TaskProcess todo={todo} setTodo={setTodo} setStatus={setStatus} />
      </section>
      
      <footer className='info'>
        <a href='https://www.linkedin.com/in/bilgehavvaayhan/'> B. H. A. </a>
      </footer>
    </div>
  );
}

export default App;
