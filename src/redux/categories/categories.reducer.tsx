import { categoriesActionTypes } from "./categories.types";

const INITIAL_STATE = {
  categories: {},
  errorMessage: "",
};

const CategoriesReducer = (
  state = INITIAL_STATE,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case categoriesActionTypes.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
      };
    case categoriesActionTypes.ADD_CATEGORY_FAILURE:
    case categoriesActionTypes.DELETE_CATEGORY_FAILURE:
    case categoriesActionTypes.UPDATE_CATEGORY_FAILURE:
    case categoriesActionTypes.GET_CATEGORIES_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default CategoriesReducer;
