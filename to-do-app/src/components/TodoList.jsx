import TodoItem from "./TodoItem"

const TodoList = ({todos, delTodo, toggleCompliteTodo}) => {
  
  return (
    <ul>
      {todos.map((todo) => (
      <TodoItem
      key={todo.id} 
      delTodo={delTodo}
      toggleCompliteTodo={toggleCompliteTodo}
      {...todo}
      />
      ))}
    </ul>
  )
}

export default TodoList