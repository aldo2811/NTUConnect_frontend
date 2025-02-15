import threadService from "../services/threads.service";
import forumService from "../services/forums.service";

import { handleError } from "./error.action";

export const SET = "THREADS_SET";
export const RESET = "THREADS_RESET";

export const set = (key, value) => ({ type: SET, key, value });
export const reset = () => ({ type: RESET });

const getToken = (getState) => {
  const accessToken = getState().user.get("accessToken");
  return `Bearer ${accessToken}`;
};

export const getAll = () => async (dispatch, getState) => {
  const accessToken = getToken(getState);
  dispatch(set("loading"), true);
  const res = await threadService.list(accessToken);
  if (res.data) {
    dispatch(set("forum", {}));
    dispatch(set("threads", res.data));
  } else {
    dispatch(handleError(res));
  }
  dispatch(set("loading", false));
};

export const searchThreads = (keyword) => async (dispatch, getState) => {
  const accessToken = getToken(getState);
  dispatch(set("loading", true));
  const res = await threadService.search(keyword, accessToken);
  if (res.data) {
    dispatch(set("forum", {}));
    dispatch(set("threads", res.data));
  } else {
    dispatch(handleError(res));
  }
  dispatch(set("loading", false));
};

export const getThreadsOfForum = (forumId) => async (dispatch, getState) => {
  const accessToken = getToken(getState);
  dispatch(set("loading", true));
  const res = await forumService.detail(forumId, accessToken);
  if (res.data) {
    const { threads, ...rest } = res.data;
    dispatch(set("forum", { ...rest }));
    dispatch(set("threads", threads));
  } else {
    dispatch(handleError(res));
  }
  dispatch(set("loading", false));
};
