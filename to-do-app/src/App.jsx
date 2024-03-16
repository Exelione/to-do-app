import {useDispatch} from "react-redux";
import { addTodo, fetchTodos } from "./store/todoSlice";
import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoFileld from './components/TodoFileld';

function App() {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()
  const addTask = () => {
    if(title.trim('').length){
    dispatch(addTodo({title}))
    setTitle('')
    }
  }

  useEffect( () => {
    dispatch(fetchTodos());
  }, [dispatch])

  return (
    <div className="wrapper">
    <div className="App">
      <TodoFileld 
      title={title}
      handleSubmit={addTask}
      handleInput={setTitle}
      />
     
      <TodoList/>
    </div>
    </div>
  );
}

export default App;
