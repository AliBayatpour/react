import { prioritiesActionTypes } from "./priorities.types";

const INITIAL_STATE = {
  priorities: {},
  errorMessage: "",
};

const PrioritiesReducer = (
  state = INITIAL_STATE,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case prioritiesActionTypes.GET_PRIOIRITIES_SUCCESS:
      return {
        ...state,
        priorities: action.payload,
      };
    case prioritiesActionTypes.ADD_PRIORITY_FAILURE:
    case prioritiesActionTypes.DELETE_PRIORITY_FAILURE:
    case prioritiesActionTypes.UPDATE_PRIORITY_FAILURE:
    case prioritiesActionTypes.GET_PRIOIRITIES_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default PrioritiesReducer;
