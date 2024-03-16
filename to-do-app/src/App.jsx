import {useDispatch} from "react-redux";
import { addTodo, fetchTodos } from "./store/todoSlice";
import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoFileld from './components/TodoFileld';

function App() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const addTask = () => {
    if(text.trim('').length){
    dispatch(addTodo({text}))
    setText('')
    }
  }

  useEffect( () => {
    dispatch(fetchTodos());
  }, [dispatch])

  return (
    <div className="wrapper">
    <div className="App">
      <TodoFileld 
      text={text}
      handleSubmit={addTask}
      handleInput={setText}
      />
     
      <TodoList/>
    </div>
    </div>
  );
}

export default App;
