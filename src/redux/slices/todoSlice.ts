import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { RootState } from '../store';

export const initialTodos = [
	{ id: uuidv4(), title: 'Dinner', desc: "Buy ingredients needed for preparing the dinner", completed: true },
	{ id: uuidv4(), title: 'Walk the dog', desc: "Remember to walk the dog", completed: false },
	{ id: uuidv4(), title: 'Test!', desc: "I have to study for tomorrow's test", completed: false }
];

const todosSlice = createSlice(
	{
		name: 'todos',
		initialState: initialTodos,
		reducers: {
			addTodo: (state, action) => {
				state.push(action.payload)
			},
			changeTodoState: (state, action) => {
				const todo = state.find(todo => todo.id === action.payload)
				if (todo) {
					todo.completed = !todo.completed
				}
			},
			editTodo: (state, action) => {
				const todo = state.find(todo => todo.id === action.payload.id)
				if (todo) {
					todo.title = action.payload.title
					todo.desc = action.payload.desc
				}
			},
			deleteTodo: (state, action) => {
				return state.filter(todo => todo.id !== action.payload)
			}
		}
	}
);

export const { addTodo, changeTodoState, editTodo, deleteTodo } = todosSlice.actions;
export const selectCount = (state: RootState) => state.todos
export default todosSlice.reducer;