import React from 'react'

const TodoFileld = ({text, handleSubmit, handleInput}) => {
  return (
    <label>
      <input value={text} onChange={(event) => handleInput(event.target.value)} />
      <button onClick={handleSubmit}>Add Todo</button>
    </label>
  )
}

export default TodoFileld