export const SET = "ERROR_SET";
export const RESET = "ERROR_RESET";

export const set = (key, value) => ({ type: SET, key, value });
export const reset = () => ({ type: RESET });

export const setError = (error) => (dispatch) => {
  dispatch(set("error", error));
};

export const resetError = () => (dispatch) => {
  dispatch(reset());
};
