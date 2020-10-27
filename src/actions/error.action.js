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

export const handleError = (res) => (dispatch) => {
  if (res.errorMessage) {
    dispatch(setError(res.errorMessage));
  } else if (res.response.data.errorMessage) {
    dispatch(setError(res.response.data.errorMessage));
  } else if (res.response.statusText) {
    dispatch(setError(res.response.statusText));
  } else {
    dispatch(setError(res.response.status));
  }
};
