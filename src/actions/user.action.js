import userService from "../services/user.service";
import * as storage from "./storage";

export const SET = "USER_SET";
export const RESET = "USER_RESET";

export const set = (key, value) => ({ type: SET, key, value });
export const reset = () => ({ type: RESET });

const setRefreshToken = (refreshToken) => {
  storage.save("refresh_token", refreshToken);
  return set("refreshToken", refreshToken);
};

const setAccessToken = (accessToken) => {
  storage.save("access_token", accessToken);
  return set("accessToken", accessToken);
};

export const login = (username, email, password) => async (dispatch) => {
  const res = await userService.login(username, email, password);
  if (res.data) {
    const { accessToken, refreshToken, user } = res.data;
    dispatch(setRefreshToken(refreshToken));
    dispatch(setAccessToken(accessToken));
    dispatch(set("user", user));
  } else {
    dispatch(set("error", res));
  }
};

export const logout = () => (dispatch) => {
  dispatch(setAccessToken(null));
  dispatch(setRefreshToken(null));
};

export const register = (username, email, password1, password2) => async (
  dispatch
) => {
  const res = await userService.register(username, email, password1, password2);
  if (res.data) {
    const { accessToken, refreshToken, user } = res.data;
    dispatch(setRefreshToken(refreshToken));
    dispatch(setAccessToken(accessToken));
    dispatch(set("user", user));
  } else {
    dispatch(set("error", res));
  }
};

export const verifyAccess = () => async (dispatch, getState) => {
  const userState = getState().user;

  const localRefreshToken = storage.get("refresh_token");
  const localAccessToken = storage.get("access_token");
  const res = await userService.verify(localAccessToken);

  if (res.status === 200) {
    if (!userState.get("accessToken"))
      dispatch(setAccessToken(localAccessToken));
    if (!userState.get("refreshToken"))
      dispatch(setRefreshToken(localRefreshToken));
  } else if (res.status === 400 || res.status === 401) {
    const refreshRes = await userService.refresh(localRefreshToken);
    if (refreshRes.status === 200) {
      const { access } = refreshRes.data;
      dispatch(setAccessToken(access));
      dispatch(setRefreshToken(localRefreshToken));
    } else {
      dispatch(set("error", res.statusText));
    }
  } else {
    dispatch(set("error", res));
  }
};
