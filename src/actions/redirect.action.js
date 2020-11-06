export const SET = "REDIRECT_SET";
export const RESET = "REDIRECT_RESET";

export const set = (key, value) => ({ type: SET, key, value });
export const reset = () => ({ type: RESET });

export const setRedirect = () => (dispatch) => {
  dispatch(set("redirect", true));
};

export const resetRedirect = () => (dispatch) => {
  dispatch(reset());
};
