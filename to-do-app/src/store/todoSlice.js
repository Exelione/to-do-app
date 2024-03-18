import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';


export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async function (_, {rejectWithValue}) {
        try {

            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            if(!response.ok){
                throw new Error ('Server error!')
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
        
        
        
    }
)
export const deleteTodo = createAsyncThunk(
    'todos/deleteTodo',
    async function (id, { rejectWithValue, dispatch }) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'DELETE',
            })
            
            if(!response.ok){
                throw new Error ('Can\'t delete task. Server error')
        }
        dispatch(delTodo({id}));
        }catch (error) {
            return rejectWithValue(error.message)
        }

    })
export const toggleStatus = createAsyncThunk(
    'todos/toggleStatus',
    async function(id, {getState, rejectWithValue, dispatch}){
        const todo = getState().todos.todos.find(todo => todo.id === id)
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/JSON',
                },
                body: JSON.stringify({
                    completed: !todo.completed
                })
            })
            if(!response.ok){
                throw new Error ('Can\'t toggle status. Server error')
            }
            

            dispatch(toggleCompliteTodo({id}))

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const addNewTodo = createAsyncThunk(
    'todos/addNewTodo',
    async function(text, {dispatch, rejectWithValue}){
        try {
            const todo = {
                
                title: text,
                userId: 1,
                completed: false
            };
            const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/JSON',
                },
                body: JSON.stringify(todo)
            });
            if (!response.ok) {
                throw new Error('Can\'t add task. Server error')
            }
            const data = await response.json()
            
            dispatch(addTodo(data))
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
const setError = (state, action) => {
    state.status = 'rejected'
    state.error = action.payload
};
const todoSlice = createSlice({
    name: 'todos',

    initialState: {
        todos: [],
        status: null,
        error: null
    },

    reducers: {
        addTodo(state, action) {
            
            state.todos.push(action.payload)
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
            state.status = 'loading'
            state.error = null
        });
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.status = 'resolved'
            state.todos = action.payload
            
        });
        builder.addCase(fetchTodos.rejected, setError);
        builder.addCase(deleteTodo.rejected, setError);
        builder.addCase(toggleStatus.rejected, setError);
        builder.addCase(addNewTodo.rejected, setError);
    }

})
const {addTodo, delTodo, toggleCompliteTodo} = todoSlice.actions;

export default todoSlice.reducer;