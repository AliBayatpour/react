import { PriorityInterface } from "../../interfaces/priority.interface";
import { prioritiesActionTypes } from "./priorities.types";

// GET PRIORITIES
export const getPrioritiesStart = (token: string) => ({
  type: prioritiesActionTypes.GET_PRIOIRITIES_START,
  payload: token,
});
export const getPrioritiesSuccess = (priorities: any) => ({
  type: prioritiesActionTypes.GET_PRIOIRITIES_SUCCESS,
  payload: priorities,
});
export const getPrioritiesFailure = (errorMessage: string) => ({
  type: prioritiesActionTypes.GET_PRIOIRITIES_FAILURE,
  payload: errorMessage,
});

// ADD PRIORITIES
export const addPriorityStart = (
  priority: PriorityInterface,
  token: string
) => ({
  type: prioritiesActionTypes.ADD_PRIORITY_START,
  payload: { priority, token },
});
export const addPrioritySuccess = () => ({
  type: prioritiesActionTypes.ADD_PRIORITY_SUCCESS,
});
export const addPriorityFailure = (errorMessage: string) => ({
  type: prioritiesActionTypes.ADD_PRIORITY_FAILURE,
  payload: errorMessage,
});

// UPDATE PRIORITIES
export const updatePriorityStart = (
  priority: PriorityInterface,
  token: string
) => ({
  type: prioritiesActionTypes.UPDATE_PRIORITY_START,
  payload: { priority, token },
});
export const updatePrioritySuccess = () => ({
  type: prioritiesActionTypes.UPDATE_PRIORITY_SUCCESS,
});
export const updatePriorityFailure = (errorMessage: string) => ({
  type: prioritiesActionTypes.UPDATE_PRIORITY_FAILURE,
  payload: errorMessage,
});

// DELETE PRIORITIES
export const deletePriorityStart = (
  priority: PriorityInterface,
  token: string
) => ({
  type: prioritiesActionTypes.DELETE_PRIORITY_START,
  payload: { priority, token },
});
export const deletePrioritySuccess = () => ({
  type: prioritiesActionTypes.DELETE_PRIORITY_SUCCESS,
});
export const deletePriorityFailure = (errorMessage: string) => ({
  type: prioritiesActionTypes.DELETE_PRIORITY_FAILURE,
  payload: errorMessage,
});
