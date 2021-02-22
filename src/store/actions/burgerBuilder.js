import axios from "../../axios-orders";
import * as actionTypes from "./actionsTypes";

// kreatory akcji zwracają całą akcje
export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENTS,
    ingredientName: name,
  };
};

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENTS,
    ingredientName: name,
  };
};

export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients,
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
  };
};

export const initIngredients = () => {
  return (dispatch) => {
    axios
      .get(`/ingredients.json`)
      .then((response) => {
        dispatch(setIngredients(response.data));
      })
      .catch(() => {
        dispatch(fetchIngredientsFailed());
      });
  };
};
