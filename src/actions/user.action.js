export const SET = "USER_SET";
export const RESET = "USER_RESET";

export const set = (key, value) => ({ type: SET, key, value });
export const reset = () => ({ type: RESET });
