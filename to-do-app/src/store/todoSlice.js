import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                compleated: false
            })
        },
        delTodo(state, action){
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        toggleCompliteTodo(state, action){
            state.todos = state.todos.map(todo => {
                if(todo.id !== action.payload.id) return todo;
                return {
                    ...todo,
                    compleated: !todo.compleated
                }
            })
        }
    }

})
export const {addTodo, delTodo, toggleCompliteTodo} = todoSlice.actions;

export default todoSlice.reducer;