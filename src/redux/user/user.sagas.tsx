import { takeLatest, put, all, call } from "redux-saga/effects";
import { signIn, signUp } from "../../utils/auth.utils";
import {
  signInFailure,
  signInSuccess,
  signUpFailure,
  signUpSuccess,
} from "./user.actions";
import { userActionTypes } from "./user.types";

// SIGN UP
export function* signUpStartAsync(props: any): Generator<any> {
  try {
    let user = yield signUp(props.payload);
    if (user) {
      yield put(signUpSuccess(user));
    } else {
      yield put(signUpFailure("SomethUpg went wrong"));
    }
  } catch (error) {
    yield put(signUpFailure(error.message));
  }
}
export function* onSignUpStart() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUpStartAsync);
}

// SIGN IN
export function* signInStartAsync(props: any): Generator<any> {
  try {
    let user = yield signIn(props.payload);
    if (user) {
      yield put(signInSuccess(user));
    } else {
      yield put(signInFailure("Something went wrong"));
    }
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}
export function* onSignInStart() {
  yield takeLatest(userActionTypes.SIGN_IN_START, signInStartAsync);
}
export function* userSagas() {
  yield all([call(onSignInStart), call(onSignUpStart)]);
}
