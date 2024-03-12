import React from 'react'

const TodoItem = ({id, compleated, text, delTodo, toggleCompliteTodo}) => {
  return (
      <li>
          <input type='checkbox' checked={compleated} onChange={() => toggleCompliteTodo(id)} />
          <span>{text}</span>
          <span className='delete' onClick={() => delTodo(id)}>&times;</span>
      </li>
  )
}

export default TodoItem