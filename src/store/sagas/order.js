import { put } from "redux-saga/effects";
import axios from "../../axios-orders";
import * as actions from "../actions";

export function* purchaseBurgerSaga(action) {
  const { token, orderData } = action;

  yield put(actions.purchaseBurgerStart());

  try {
    const queryParams = `auth=${token}`;
    const response = yield axios.post(`/orders.json?${queryParams}`, orderData);

    yield put(actions.purchaseBurgerSuccess(response.data.name, orderData));
  } catch (error) {
    yield put(actions.purchaseBurgerFail(error));
  }
}

export function* fetchOrdersSaga(action) {
  const { token, userId } = action;

  yield put(actions.fetchOrdersStart());

  try {
    const queryParams = yield `auth=${token}&orderBy="userId"&equalTo="${userId}"`;
    const response = yield axios.get(`/orders.json?${queryParams}`);

    const fetchedOrders = [];
    for (let key in response.data) {
      fetchedOrders.push({
        ...response.data[key],
        id: key,
      });
    }

    yield put(actions.fetchOrdersSuccess(fetchedOrders));
  } catch (error) {
    yield put(actions.fetchOrdersFail(error));
  }
}
