import { configureStore } from '@reduxjs/toolkit';
import todoReducer, { initialTodos } from './slices/todoSlice';
import { listenerMiddleware } from "./middleware";

const localStorageTodos = JSON.parse(localStorage.getItem('todos') || 'null')?.todos;

const store = configureStore({
	reducer: {
		todos: todoReducer
	},
	preloadedState: {
		todos: localStorageTodos ?? initialTodos
	},
	middleware: (getDefaultMiddleware) => [
		...getDefaultMiddleware(),
		listenerMiddleware.middleware
	]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;