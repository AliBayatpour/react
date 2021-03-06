import { userActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (
  state = INITIAL_STATE,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case userActionTypes.SIGN_IN_SUCCESS:
    case userActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case userActionTypes.SIGN_UP_FAILURE:
    case userActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case userActionTypes.SIGN_OUT:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    default:
      return state;
  }
};

export default userReducer;
