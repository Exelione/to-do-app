import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';


export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async function () {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        return data;
    }
)
const todoSlice = createSlice({
    name: 'todos',

    initialState: {
        todos: [],
        status: null,
        error: null
    },

    reducers: {
        addTodo(state, action) {
            
            state.todos.push({
                id: new Date().toISOString(),
                title: action.payload.title,
                completed: false
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
                    completed: !todo.completed
                }
            })
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchTodos.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        });
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.status = 'resolved';
            state.todos = action.payload;
            
        });
        builder.addCase(fetchTodos.rejected, (state, action) => {});
        // builder.addCase(delTodo.rejected, (state, action) => {});
        // builder.addCase(toggleCompliteTodo.rejected, (state, action) => {});
    }

})
export const {addTodo, delTodo, toggleCompliteTodo} = todoSlice.actions;

export default todoSlice.reducer;