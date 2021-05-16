import { createSelector } from "reselect";

const selectPriorities = (state: any) => state.priorities;

export const selectCurrentPriorities = createSelector(
  [selectPriorities],
  (priorities) => priorities.priorities
);
