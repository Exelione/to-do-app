import React from 'react';
import { useDispatch } from 'react-redux';
import { delTodo, toggleCompliteTodo } from '../store/todoSlice';

const TodoItem = ({id, compleated, title}) => {
  const dispatch = useDispatch();
  
  return (
      <li>
          <input type='checkbox' checked={compleated} onChange={() => dispatch(toggleCompliteTodo({id}))} />
          <span>{title}</span>
          <span className='delete' onClick={() => dispatch(delTodo({id}))}>&times;</span>
      </li>
  )
}

export default TodoItem