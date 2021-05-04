import * as APIUtil from "../util/sessionApiUtil";
import jwt_decode from "jwt-decode";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT
});

export const signup = user => dispatch =>
  APIUtil.signup(user)
    .then(res => {
      const { token, refresh_token } = res.data;
      localStorage.setItem("access_token", token);
      localStorage.setItem("refresh_token", refresh_token);
      APIUtil.setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(receiveCurrentUser(decoded));
    })
    // .catch(err => dispatch(receiveErrors(err.response.data)));

export const login = user => dispatch =>
  APIUtil.login(user)
    .then(res => {
      const { token, refresh_token } = res.data;
      localStorage.setItem("access_token", token);
      localStorage.setItem("refresh_token", refresh_token);
      APIUtil.setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(receiveCurrentUser(decoded));
    })
    // .catch(err => {
    //   dispatch(receiveErrors(err.response.data));
    // });

export const logout = () => dispatch => {
  localStorage.removeItem("access_token");
  APIUtil.setAuthToken(false).then(() => dispatch(logoutUser()));
};
