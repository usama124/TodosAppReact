import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
import React, {useState} from 'react';

function App() {

  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo)
  }

  let todos = [
    {
      sno: 1,
      title: "2 dozen Eggs",
      desc: "Go to the market to bring 2 dozen eggs"
    },
    {
      sno: 2,
      title: "1 Plain Bread",
      desc: "Go to the market to bring 1 plain bread"
    },
    {
      sno: 3,
      title: "3 Shower Handle",
      desc: "Go to the hardware store to bring 3 water shower handle"
    }
  ]
  return (
    <>
      <Header title="My Todos List" searchBar={true}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
