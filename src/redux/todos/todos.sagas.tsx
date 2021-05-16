import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../../utils/todos.utils";
import {
  addTodoFailure,
  deleteTodoFailure,
  getTodosFailure,
  getTodosStart,
  getTodosSuccess,
  updateTodoFailure,
} from "./todos.actions";
import { todosActionTypes } from "./todos.types";

// GET TODOS
export function* getTodosStartAsync(props: any): Generator<any> {
  try {
    let todos = yield getTodos(props.payload);
    console.log(todos);
    if (todos) {
      yield put(getTodosSuccess(todos));
    } else {
      yield put(getTodosFailure("Something went wrong"));
    }
  } catch (error) {
    yield put(getTodosFailure(error.message));
  }
}
export function* onGetTodosStart() {
  yield takeLatest(todosActionTypes.GET_TODOS_START, getTodosStartAsync);
}

// ADD TODO
export function* addTodoStartAsync(props: any): Generator<any> {
  try {
    console.log(props.payload);
    let addRes = yield addTodo(props.payload.todo, props.payload.token);
    if (addRes) {
      yield put(getTodosStart(props.payload.token));
    } else {
      yield put(addTodoFailure("Something went wrong"));
    }
  } catch (error) {
    yield put(addTodoFailure(error.message));
  }
}
export function* onAddTodoStart() {
  yield takeLatest(todosActionTypes.ADD_TODO_START, addTodoStartAsync);
}

// UPDATE TODO
export function* updateTodoStartAsync(props: any): Generator<any> {
  try {
    let updRes = yield updateTodo(props.payload.todo, props.payload.token);
    if (updRes) {
      yield put(getTodosStart(props.payload.token));
    } else {
      yield put(updateTodoFailure("Something went wrong"));
    }
  } catch (error) {
    yield put(updateTodoFailure(error.message));
  }
}
export function* onUpdateTodoStart() {
  yield takeLatest(todosActionTypes.UPDATE_TODO_START, updateTodoStartAsync);
}

// DELETE TODO
export function* deleteTodoStartAsync(props: any): Generator<any> {
  try {
    let delRes = yield deleteTodo(props.payload.todo, props.payload.token);
    console.log(delRes);
    if (delRes) {
      yield put(getTodosStart(props.payload.token));
    } else {
      yield put(deleteTodoFailure("Something went wrong"));
    }
  } catch (error) {
    yield put(deleteTodoFailure(error.message));
  }
}
export function* onDeleteTodoStart() {
  yield takeLatest(todosActionTypes.DELETE_TODO_START, deleteTodoStartAsync);
}
export function* TodosSagas() {
  yield all([
    call(onGetTodosStart),
    call(onAddTodoStart),
    call(onDeleteTodoStart),
    call(onUpdateTodoStart),
  ]);
}
