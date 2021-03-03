import { delay, put, call } from "redux-saga/effects";
import axios from "axios";
import * as actions from "../actions";

// funkcja z "*" to tzw. generator. Generatory to takie funkcje, których wykonywanie można w danym momencie przerwać
export function* logoutSaga(action) {
  yield call([localStorage, "removeItem"], "bb_token"); // call jest pomocne do testowania
  yield call([localStorage, "removeItem"], "bb_expirationDate");
  yield call([localStorage, "removeItem"], "bb_userId");
  // put oznacza dispatchowanie akcji
  yield put(actions.logoutSucceed());
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime * 1000);
  yield put(actions.logout());
}

export function* authUserSaga(action) {
  const { email, password, isSignUp } = action;

  yield put(actions.authStart());

  let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;
  if (!isSignUp) {
    url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;
  }

  try {
    const response = yield axios.post(url, {
      email,
      password,
      returnSecureToken: true,
    });

    const { idToken, localId, expiresIn } = response.data;

    const expirationDate = yield new Date(
      new Date().getTime() + expiresIn * 1000
    );

    yield localStorage.setItem("bb_token", idToken);
    yield localStorage.setItem("bb_expirationDate", expirationDate);
    yield localStorage.setItem("bb_userId", localId);

    yield put(actions.authSuccess(idToken, localId));
    yield put(actions.checkAuthTimeout(expiresIn));
  } catch (error) {
    yield put(actions.authFail(error.response.data.error.message));
  }
}

export function* authCheckStateSaga(action) {
  const token = yield localStorage.getItem("bb_token");

  if (!token) {
    yield put(actions.logout());
  } else {
    const expirationDate = yield new Date(
      localStorage.getItem("bb_expirationDate")
    );
    if (expirationDate <= new Date()) {
      yield put(actions.logout());
    } else {
      const userId = yield localStorage.getItem("bb_userId");
      yield put(actions.authSuccess(token, userId));
      yield put(
        actions.checkAuthTimeout(
          (expirationDate.getTime() - new Date().getTime()) / 1000
        )
      );
    }
  }
}
