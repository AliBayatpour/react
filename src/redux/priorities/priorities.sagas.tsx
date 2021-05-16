import { prioritiesActionTypes } from "./priorities.types";
import {
  addPriorityFailure,
  deletePriorityFailure,
  getPrioritiesFailure,
  getPrioritiesStart,
  getPrioritiesSuccess,
  updatePriorityFailure,
} from "./priorities.actions";
import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import {
  addPriority,
  deletePriority,
  getPriorities,
  updatePriority,
} from "../../utils/priorities.utils";

// GET PRIORITIES
export function* getPrioritiesStartAsync(props: any): Generator<any> {
  try {
    let priorities = yield getPriorities(props.payload);
    console.log(priorities);
    if (priorities) {
      yield put(getPrioritiesSuccess(priorities));
    } else {
      yield put(getPrioritiesFailure("Something went wrong"));
    }
  } catch (error) {
    yield put(getPrioritiesFailure(error.message));
  }
}
export function* onGetPrioritiesStart() {
  yield takeLatest(
    prioritiesActionTypes.GET_PRIOIRITIES_START,
    getPrioritiesStartAsync
  );
}

// ADD PRIORITY
export function* addPriorityStartAsync(props: any): Generator<any> {
  try {
    console.log(props.payload);
    let addRes = yield addPriority(props.payload.priority, props.payload.token);
    if (addRes) {
      yield put(getPrioritiesStart(props.payload.token));
    } else {
      yield put(addPriorityFailure("Something went wrong"));
    }
  } catch (error) {
    yield put(addPriorityFailure(error.message));
  }
}
export function* onAddPriorityStart() {
  yield takeLatest(
    prioritiesActionTypes.ADD_PRIORITY_START,
    addPriorityStartAsync
  );
}

// UPDATE PRIORITY
export function* updatePriorityStartAsync(props: any): Generator<any> {
  try {
    let updRes = yield updatePriority(
      props.payload.priority,
      props.payload.token
    );
    if (updRes) {
      yield put(getPrioritiesStart(props.payload.token));
    } else {
      yield put(updatePriorityFailure("Something went wrong"));
    }
  } catch (error) {
    yield put(updatePriorityFailure(error.message));
  }
}
export function* onUpdatePriorityStart() {
  yield takeLatest(
    prioritiesActionTypes.UPDATE_PRIORITY_START,
    updatePriorityStartAsync
  );
}

// DELETE PRIORITY
export function* deletePriorityStartAsync(props: any): Generator<any> {
  try {
    let delRes = yield deletePriority(
      props.payload.priority,
      props.payload.token
    );
    console.log(delRes);
    if (delRes) {
      yield put(getPrioritiesStart(props.payload.token));
    } else {
      yield put(deletePriorityFailure("Something went wrong"));
    }
  } catch (error) {
    yield put(deletePriorityFailure(error.message));
  }
}
export function* onDeletePriorityStart() {
  yield takeLatest(
    prioritiesActionTypes.DELETE_PRIORITY_START,
    deletePriorityStartAsync
  );
}
export function* PrioritiesSagas() {
  yield all([
    call(onGetPrioritiesStart),
    call(onAddPriorityStart),
    call(onDeletePriorityStart),
    call(onUpdatePriorityStart),
  ]);
}
