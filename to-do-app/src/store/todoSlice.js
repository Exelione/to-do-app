import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action) {
            console.log(state)
            console.log(action)
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                compleated: false
            })
        },
        delTodo(state, action){},
        toggleCompliteTodo(state, action){}
    }

})
export const {addTodo, delTodo, toggleCompliteTodo} = todoSlice.actions;

export default todoSlice.reducer;