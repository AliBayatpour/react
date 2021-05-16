import { combineReducers } from "redux";
import CategoriesReducer from "./categories/categories.reducer";
import PrioritiesReducer from "./priorities/priorities.reducer";
import TodosReducer from "./todos/todos.reducer";
import userReducer from "./user/user.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  categories: CategoriesReducer,
  priorities: PrioritiesReducer,
  todos: TodosReducer
});
export default rootReducer;
