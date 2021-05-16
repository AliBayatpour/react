import { todosActionTypes } from "./todos.types";

const INITIAL_STATE = {
  todos: {},
  errorMessage: "",
};

const TodosReducer = (
  state = INITIAL_STATE,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case todosActionTypes.GET_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
      };
    case todosActionTypes.ADD_TODO_FAILURE:
    case todosActionTypes.DELETE_TODO_FAILURE:
    case todosActionTypes.UPDATE_TODO_FAILURE:
    case todosActionTypes.GET_TODOS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default TodosReducer;
