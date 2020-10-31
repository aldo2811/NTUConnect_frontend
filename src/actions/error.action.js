export const SET = "ERROR_SET";
export const RESET = "ERROR_RESET";

export const set = (key, value) => ({ type: SET, key, value });
export const reset = () => ({ type: RESET });

export const setError = (status, message) => (dispatch) => {
  dispatch(set("error", { status, message }));
};

export const resetError = () => (dispatch) => {
  dispatch(reset());
};

export const handleError = (res) => (dispatch) => {
  const error = res.response;
  const { status } = error;

  if (error.data.errorMessage) {
    dispatch(setError(status, error.data.errorMessage));
  } else if (error.statusText) {
    dispatch(setError(status, error.statusText));
  } else {
    dispatch(setError(status, status));
  }
};
