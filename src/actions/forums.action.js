import forumService from "../services/forums.service";

export const SET = "FORUMS_SET";
export const RESET = "FORUMS_RESET";

export const set = (key, value) => ({ type: SET, key, value });
export const reset = () => ({ type: RESET });

const getToken = (getState) => {
  const accessToken = getState().user.get("accessToken");
  return `Bearer ${accessToken}`;
};

export const getAll = () => async (dispatch, getState) => {
  const accessToken = getToken(getState);
  dispatch(set("loading", true));
  const res = await forumService.list(accessToken);
  if (res.data) {
    dispatch(set("forums", res.data));
  } else {
    dispatch(set("error", res.response));
  }
  dispatch(set("loading", false));
};

export const joinForum = (forumId) => async (dispatch, getState) => {
  const accessToken = getToken(getState);
  const res = await forumService.join(forumId, accessToken);
  if (res.data) {
    dispatch(getAll());
  } else {
    dispatch(set("error", res.response));
  }
};
