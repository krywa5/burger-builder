import * as actionTypes from "./actionsTypes";
import axios from "axios";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (authData) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error,
  };
};

export const auth = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
        {
          email,
          password,
          returnSecureToken: true,
        }
      )
      .then((response) => {
        dispatch(authSuccess(response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(authFail());
      });
  };
};
