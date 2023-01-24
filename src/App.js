import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {AddTodo} from './MyComponents/AddTodo';
import {Footer} from './MyComponents/Footer';
import React, {useState, useEffect} from 'react';
import { cleanup } from '@testing-library/react';

function App() {

  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);
    setTodos(todos.filter((e) => {
      return e !== todo
    }))
  }

  const addTodo = (title, desc) =>{
    console.log("I am adding ");
    let sno;
    if(todos.length == 0){
      sno = 1;
    }
    else{
      sno = todos[todos.length-1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    console.log(myTodo);
    setTodos([...todos, myTodo]);
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Header title="My Todos List" searchBar={true}/>
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
