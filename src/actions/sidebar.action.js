export const SET = "SIDEBAR_SET";
export const RESET = "SIDEBAR_RESET";

export const set = (key, value) => ({ type: SET, key, value });
export const reset = () => ({ type: RESET });

export const setSelected = (selected) => (dispatch) => {
  dispatch(set("selected", selected));
};
