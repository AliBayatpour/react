import { SignInInterface } from "../../interfaces/sign-in.interface";
import { SignUpInterface } from "../../interfaces/sign-up.interface";
import { userActionTypes } from "./user.types";

export const signInStart = (signInData: SignInInterface) => ({
  type: userActionTypes.SIGN_IN_START,
  payload: signInData,
});

export const signInSuccess = (user: any) => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error: string) => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const signOut = () => ({
  type: userActionTypes.SIGN_OUT,
});

export const signUpStart = (userCredentials: SignUpInterface) => ({
  type: userActionTypes.SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccess = (user: any) => ({
  type: userActionTypes.SIGN_UP_SUCCESS,
  payload: user,
});

export const signUpFailure = (error: string) => ({
  type: userActionTypes.SIGN_UP_FAILURE,
  payload: error,
});
