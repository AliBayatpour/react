import { createSelector } from "reselect";

const selectCategories = (state: any) => state.categories;

export const selectCurrentCategories = createSelector(
  [selectCategories],
  (categories) => categories.categories
);
