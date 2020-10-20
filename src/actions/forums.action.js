import forumService from "../services/forums.service";

import { handleError } from "./error.action";

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
    dispatch(handleError(res));
  }
  dispatch(set("loading", false));
};

export const joinForum = (forumId) => async (dispatch, getState) => {
  const accessToken = getToken(getState);
  const res = await forumService.join(forumId, accessToken);
  if (res.data) {
    dispatch(getAll());
  } else {
    dispatch(handleError(res));
  }
};

export const createForum = (courseTitle, courseCode) => async (
  dispatch,
  getState
) => {
  const accessToken = getToken(getState);
  const res = await forumService.create(courseTitle, courseCode, accessToken);
  if (res.data) {
    dispatch(getAll());
  } else {
    dispatch(handleError(res));
  }
};
