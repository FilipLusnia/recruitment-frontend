import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { addTodo, changeTodoState, editTodo, deleteTodo } from "./slices/todoSlice";

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
	matcher: isAnyOf(addTodo, changeTodoState, editTodo, deleteTodo),
	effect: (_, listenerApi) => localStorage.setItem("todos", JSON.stringify(listenerApi.getState()))
});