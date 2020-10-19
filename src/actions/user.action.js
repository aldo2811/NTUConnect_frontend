import userService from "../services/user.service";
import * as storage from "./storage";
import { setError } from "./error.action";

export const SET = "USER_SET";
export const RESET = "USER_RESET";

export const set = (key, value) => ({ type: SET, key, value });
export const reset = () => ({ type: RESET });

const setAccessToken = (accessToken) => {
  storage.save("access_token", accessToken);
  return set("accessToken", accessToken);
};

const getToken = (getState) => {
  const accessToken = getState().user.get("accessToken");
  return `Bearer ${accessToken}`;
};

export const login = (username, email, password) => async (dispatch) => {
  const res = await userService.login(username, email, password);
  if (res.data) {
    const { accessToken, user } = res.data;
    dispatch(setAccessToken(accessToken));
    dispatch(set("user", user));
  } else {
    dispatch(setError(res.response.data.nonFieldErrors[0]));
  }
};

export const logout = () => (dispatch) => {
  dispatch(setAccessToken(null));
};

export const register = (username, email, password1, password2) => async (
  dispatch
) => {
  const res = await userService.register(username, email, password1, password2);

  if (res.data) {
    const { accessToken, user } = res.data;
    dispatch(setAccessToken(accessToken));
    dispatch(set("user", user));
  } else {
    dispatch(setError(res.response.data.nonFieldErrors[0]));
  }
};

export const verifyAccess = () => async (dispatch, getState) => {
  const userState = getState().user;

  const localAccessToken = storage.get("access_token");
  const res = await userService.verify(localAccessToken);

  if (res.status === 200) {
    if (!userState.get("accessToken"))
      dispatch(setAccessToken(localAccessToken));
  } else {
    dispatch(set("verifyError", res.response.status));
  }
};

export const getAll = () => async (dispatch, getState) => {
  const accessToken = getToken(getState);
  dispatch(set("loading", true));
  const res = await userService.list(accessToken);
  if (res.data) {
    dispatch(set("users", res.data));
  } else {
    dispatch(setError(res.response.status));
  }
  dispatch(set("loading", false));
};
