import {useDispatch} from "react-redux";
import { addTodo } from "./store/todoSlice";
import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoFileld from './components/TodoFileld';

function App() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const addTask = () => {
    dispatch(addTodo({text}))
    setText('')
  }
  return (
    <div className="App">
      <TodoFileld 
      text={text}
      handleSubmit={addTask}
      handleInput={setText}
      />
     
      <TodoList/>
    </div>
  );
}

export default App;
