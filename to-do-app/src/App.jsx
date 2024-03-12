
import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoFileld from './components/TodoFileld';

function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          compleated: false
        }
      ])
      setText('')
    }
  };

  const delTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId))
  };

  const toggleCompliteTodo  = (todoId) => {
    setTodos(
      todos.map(
        todo => {
          if(todo.id !== todoId) return todo
          return {
            ...todo,
            compleated: !todo.compleated
          }
        })
    )
  }

  return (
    <div className="App">
      <TodoFileld 
      text={text}
      handleSubmit={addTodo}
      handleInput={setText}
      />
     
      <TodoList
      todos={todos}
      toggleCompliteTodo = {toggleCompliteTodo}
      delTodo = {delTodo}
      />
    </div>
  );
}

export default App;
