import userService from "../services/user.service";
import * as storage from "./storage";
import { handleError } from "./error.action";

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

export const login = (username, password) => async (dispatch) => {
  dispatch(set("type", null));
  const res = await userService.login(username, password);
  if (res.data) {
    const { accessToken, user } = res.data;
    dispatch(setAccessToken(accessToken));
    dispatch(set("user", user));
  } else {
    dispatch(handleError(res));
  }
};

export const logout = () => (dispatch) => {
  dispatch(setAccessToken(null));
  dispatch(reset());
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
    dispatch(handleError(res));
  }
};

export const verifyAccess = () => async (dispatch) => {
  const localAccessToken = storage.get("access_token");
  if (localAccessToken) {
    const res = await userService.verify(localAccessToken);
    if (res.status === 200) {
      dispatch(setAccessToken(localAccessToken));
    } else {
      dispatch(set("verifyError", res.response.statusText));
    }
  } else {
    dispatch(set("verifyError", "Invalid access token"));
  }
};

export const getAll = () => async (dispatch, getState) => {
  const accessToken = getToken(getState);
  dispatch(set("loading", true));
  const res = await userService.list(accessToken);
  if (res.data) {
    dispatch(set("users", res.data));
  } else {
    dispatch(handleError(res));
  }
  dispatch(set("loading", false));
};

export const getCurrentUser = () => async (dispatch, getState) => {
  const accessToken = getToken(getState);
  const res = await userService.currentUser(accessToken);
  if (res.data) {
    dispatch(set("type", res.data.type));
  }
};
