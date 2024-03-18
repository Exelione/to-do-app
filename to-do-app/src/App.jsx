import {useDispatch, useSelector} from "react-redux";
import { addNewTodo, fetchTodos } from "./store/todoSlice";
import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoFileld from './components/TodoFileld';

function App() {
  const [text, setText] = useState('')
  const {status, error} = useSelector(state => state.todos)
  const dispatch = useDispatch()
  const addTask = () => {
    if(text.trim('').length){
    dispatch(addNewTodo(text))
    setText('')
    }
  }

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch])

  return (
    <div className="wrapper">
    <div className="App">
      <TodoFileld 
      title={text}
      handleSubmit={addTask}
      handleInput={setText}
      />
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>An error occurred: {error}</h2>}
     
      <TodoList/>
    </div>
    </div>
  );
}

export default App;
