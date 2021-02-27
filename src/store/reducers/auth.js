import * as actionTypes from "../actions/actionsTypes";
import { updateObject } from "../../store/utility";

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
};

const authStart = (state) => {
  return updateObject(state, { loading: true, error: null });
};

const authSuccess = (state, action) => {
  const { userId, idToken } = action;

  return updateObject(state, {
    loading: false,
    error: null,
    token: idToken,
    userId,
  });
};

const authFail = (state, { error }) => {
  return updateObject(state, {
    loading: false,
    error: error,
  });
};

const authLogout = (state) => {
  return updateObject(state, {
    token: null,
    userId: null,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state);
    default:
      return state;
  }
};

export default reducer;
