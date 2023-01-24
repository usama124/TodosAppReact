import React from 'react'
import {TodoItem} from './TodoItem';

export const Todos = (props) => {
  return (
    <div className='container my-5'>
        <h3>Todos List</h3>
        {props.todos.length === 0? "No Todos to display": 
        props.todos.map((todo) => {
          return (
            <div className="my-5" key={todo.sno}>
            <h6>Item {todo.sno}</h6>
            <TodoItem todo={todo} onDelete={props.onDelete}/>
            <hr></hr>
            </div>
          )
        })}
        
    </div>
 
  )
}
