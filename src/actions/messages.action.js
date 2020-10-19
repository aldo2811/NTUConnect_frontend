import messageService from "../services/messages.service";
import threadService from "../services/threads.service";

import { setError } from "./error.action";

export const SET = "MESSAGES_SET";
export const RESET = "MESSAGES_RESET";
export const UPDATE = "MESSAGES_UPDATE";

export const set = (key, value) => ({ type: SET, key, value });
export const update = (key, value) => ({ type: UPDATE, key, value });
export const reset = () => ({ type: RESET });

const getToken = (getState) => {
  const accessToken = getState().user.get("accessToken");
  return `Bearer ${accessToken}`;
};

export const getAll = (threadId) => async (dispatch, getState) => {
  const accessToken = getToken(getState);
  dispatch(set("loading", true));
  const res = await messageService.list(threadId, accessToken);

  if (res.data) {
    const { messages, ...rest } = res.data;
    dispatch(set("thread", { ...rest }));
    dispatch(set("messages", messages));
  } else {
    dispatch(setError(res.response.status));
  }
  dispatch(set("loading", false));
};

export const createThread = (title, description, forumId) => async (
  dispatch,
  getState
) => {
  const accessToken = getToken(getState);
  dispatch(set("loading", true));
  const res = await threadService.create(
    title,
    description,
    forumId,
    accessToken
  );
  if (res.data) {
    dispatch(set("messages", []));
    dispatch(set("thread", res.data));
  } else {
    dispatch(setError(res.response.data[0]));
  }
  dispatch(set("loading", false));
};

export const createMessage = (content, threadId) => async (
  dispatch,
  getState
) => {
  const accessToken = getToken(getState);
  const res = await messageService.create(content, threadId, accessToken);

  if (res.data) {
    dispatch(update("messages", res.data));
  } else {
    dispatch(setError(res.response.data.content[0]));
  }
};

export const upvoteMessage = (action, messageId) => async (
  dispatch,
  getState
) => {
  const accessToken = getToken(getState);
  const res = await messageService.upvote(action, messageId, accessToken);
  if (!res.data) {
    dispatch(setError(res.response.status));
  }
};

export const markSolvedMessage = (isCorrect, messageId) => async (
  dispatch,
  getState
) => {
  const accessToken = getToken(getState);
  const res = await messageService.markSolved(
    isCorrect,
    messageId,
    accessToken
  );
  console.log(res);
};
