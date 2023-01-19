import React from 'react'
import {TodoItem} from './TodoItem';

export const Todos = (props) => {
  return (
    <div className='container'>
        <h3 className='text-center my-3'>Todos List</h3>
        {props.todos.map((todo) => {
          return (
            <div className="my-5" key={todo.sno}>
            <h6>Item {todo.sno}</h6>
            <TodoItem todo={todo} onDelete={props.onDelete}/>
            </div>
          )
        })}
        
    </div>
 
  )
}
