import { createSelector } from "reselect";

const selectTodos = (state: any) => state.todos;

export const selectCurrentTodos = createSelector(
  [selectTodos],
  (todos) => todos.todos
);
