import userService from "../services/user.service";

export const SET = "USER_SET";
export const RESET = "USER_RESET";

export const set = (key, value) => ({ type: SET, key, value });
export const reset = () => ({ type: RESET });

export const submit = (username, email, password) => async (dispatch) => {
  const result = await userService.login(username, email, password);
  if (result.data) {
    const { accessToken, user } = result.data;
    dispatch(set("token", accessToken));
    dispatch(set("user", user));
  } else {
    dispatch(set("error", result));
  }
};
