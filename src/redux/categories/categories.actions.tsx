import { CategoryInterface } from "../../interfaces/category.interface";
import { categoriesActionTypes } from "./categories.types";

// GET LANDS
export const getCategoriesStart = (token: string) => ({
  type: categoriesActionTypes.GET_CATEGORIES_START,
  payload: token,
});
export const getCategoriesSuccess = (categories: any) => ({
  type: categoriesActionTypes.GET_CATEGORIES_SUCCESS,
  payload: categories,
});
export const getCategoriesFailure = (errorMessage: string) => ({
  type: categoriesActionTypes.GET_CATEGORIES_FAILURE,
  payload: errorMessage,
});

// ADD CATEGORIES
export const addCategoryStart = (
  category: CategoryInterface,
  token: string
) => ({
  type: categoriesActionTypes.ADD_CATEGORY_START,
  payload: { category, token },
});
export const addCategorySuccess = () => ({
  type: categoriesActionTypes.ADD_CATEGORY_SUCCESS,
});
export const addCategoryFailure = (errorMessage: string) => ({
  type: categoriesActionTypes.ADD_CATEGORY_FAILURE,
  payload: errorMessage,
});

// UPDATE CATEGORIES
export const updateCategoryStart = (
  category: CategoryInterface,
  token: string
) => ({
  type: categoriesActionTypes.UPDATE_CATEGORY_START,
  payload: { category, token },
});
export const updateCategorySuccess = () => ({
  type: categoriesActionTypes.UPDATE_CATEGORY_SUCCESS,
});
export const updateCategoryFailure = (errorMessage: string) => ({
  type: categoriesActionTypes.UPDATE_CATEGORY_FAILURE,
  payload: errorMessage,
});

// DELETE CATEGORIES
export const deleteCategoryStart = (
  category: CategoryInterface,
  token: string
) => ({
  type: categoriesActionTypes.DELETE_CATEGORY_START,
  payload: { category, token },
});
export const deleteCategorySuccess = () => ({
  type: categoriesActionTypes.DELETE_CATEGORY_SUCCESS,
});
export const deleteCategoryFailure = (errorMessage: string) => ({
  type: categoriesActionTypes.DELETE_CATEGORY_FAILURE,
  payload: errorMessage,
});
