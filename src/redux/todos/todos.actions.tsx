import { TodoInterface } from "../../interfaces/todo.interface";
import { todosActionTypes } from "./todos.types";

// GET TODOS
export const getTodosStart = (token: string) => ({
  type: todosActionTypes.GET_TODOS_START,
  payload: token,
});
export const getTodosSuccess = (todos: any) => ({
  type: todosActionTypes.GET_TODOS_SUCCESS,
  payload: todos,
});
export const getTodosFailure = (errorMessage: string) => ({
  type: todosActionTypes.GET_TODOS_FAILURE,
  payload: errorMessage,
});

// ADD TODO
export const addTodoStart = (todo: TodoInterface, token: string) => ({
  type: todosActionTypes.ADD_TODO_START,
  payload: { todo, token },
});
export const addTodoSuccess = () => ({
  type: todosActionTypes.ADD_TODO_SUCCESS,
});
export const addTodoFailure = (errorMessage: string) => ({
  type: todosActionTypes.ADD_TODO_FAILURE,
  payload: errorMessage,
});

// UPDATE TODO
export const updateTodoStart = (todo: TodoInterface, token: string) => ({
  type: todosActionTypes.UPDATE_TODO_START,
  payload: { todo, token },
});
export const updateTodoSuccess = () => ({
  type: todosActionTypes.UPDATE_TODO_SUCCESS,
});
export const updateTodoFailure = (errorMessage: string) => ({
  type: todosActionTypes.UPDATE_TODO_FAILURE,
  payload: errorMessage,
});

// DELETE TODO
export const deleteTodoStart = (todo: TodoInterface, token: string) => ({
  type: todosActionTypes.DELETE_TODO_START,
  payload: { todo, token },
});
export const deleteTodoSuccess = () => ({
  type: todosActionTypes.DELETE_TODO_SUCCESS,
});
export const deleteTodoFailure = (errorMessage: string) => ({
  type: todosActionTypes.DELETE_TODO_FAILURE,
  payload: errorMessage,
});
