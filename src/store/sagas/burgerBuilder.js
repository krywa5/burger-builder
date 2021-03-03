import axios from "../../axios-orders";
import { put } from "redux-saga/effects";
import * as actions from "../actions";

export function* fetchIngredientsInitSaga(action) {
  try {
    const response = yield axios.get(`/ingredients.json`);
    const { data } = response;
    yield put(actions.setIngredients(data));
  } catch (error) {
    yield put(actions.fetchIngredientsFailed());
  }
}
