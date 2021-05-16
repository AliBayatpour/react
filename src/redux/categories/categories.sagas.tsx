import { categoriesActionTypes } from "./categories.types";
import {
  addCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "../../utils/categories.utils";
import {
  addCategoryFailure,
  deleteCategoryFailure,
  getCategoriesFailure,
  getCategoriesStart,
  getCategoriesSuccess,
  updateCategoryFailure,
} from "./categories.actions";
import { all, call, put, takeLatest } from "@redux-saga/core/effects";

// GET CATEGORIES
export function* getCategoriesStartAsync(props: any): Generator<any> {
  try {
    let categories = yield getCategories(props.payload);
    if (categories) {
      yield put(getCategoriesSuccess(categories));
    } else {
      yield put(getCategoriesFailure("Something went wrong"));
    }
  } catch (error) {
    yield put(getCategoriesFailure(error.message));
  }
}
export function* onGetCategoriesStart() {
  yield takeLatest(
    categoriesActionTypes.GET_CATEGORIES_START,
    getCategoriesStartAsync
  );
}

// ADD CATEGORY
export function* addCategoryStartAsync(props: any): Generator<any> {
  try {
    console.log(props.payload);
    let addRes = yield addCategory(props.payload.category, props.payload.token);
    if (addRes) {
      yield put(getCategoriesStart(props.payload.token));
    } else {
      yield put(addCategoryFailure("Something went wrong"));
    }
  } catch (error) {
    yield put(addCategoryFailure(error.message));
  }
}
export function* onAddCategoryStart() {
  yield takeLatest(
    categoriesActionTypes.ADD_CATEGORY_START,
    addCategoryStartAsync
  );
}

// UPDATE CATEGORY
export function* updateCategoryStartAsync(props: any): Generator<any> {
  try {
    let updRes = yield updateCategory(
      props.payload.category,
      props.payload.token
    );
    if (updRes) {
      yield put(getCategoriesStart(props.payload.token));
    } else {
      yield put(updateCategoryFailure("Something went wrong"));
    }
  } catch (error) {
    yield put(updateCategoryFailure(error.message));
  }
}
export function* onUpdateCategoryStart() {
  yield takeLatest(
    categoriesActionTypes.UPDATE_CATEGORY_START,
    updateCategoryStartAsync
  );
}

// DELETE CATEGORY
export function* deleteCategoryStartAsync(props: any): Generator<any> {
  try {
    let delRes = yield deleteCategory(
      props.payload.category,
      props.payload.token
    );
    console.log(delRes);
    if (delRes) {
      yield put(getCategoriesStart(props.payload.token));
    } else {
      yield put(deleteCategoryFailure("Something went wrong"));
    }
  } catch (error) {
    yield put(deleteCategoryFailure(error.message));
  }
}
export function* onDeleteCategoryStart() {
  yield takeLatest(
    categoriesActionTypes.DELETE_CATEGORY_START,
    deleteCategoryStartAsync
  );
}
export function* categoriesSagas() {
  yield all([
    call(onGetCategoriesStart),
    call(onAddCategoryStart),
    call(onDeleteCategoryStart),
    call(onUpdateCategoryStart),
  ]);
}
