import React from 'react'

const TodoFileld = ({title, handleSubmit, handleInput}) => {
  return (
    <label>
      <input value={title} onChange={(event) => handleInput(event.target.value)} />
      <button onClick={handleSubmit}>Add Todo</button>
    </label>
  )
}

export default TodoFileld