import messageService from "../services/messages.service";
import threadService from "../services/threads.service";

export const SET = "MESSAGES_SET";
export const RESET = "MESSAGES_RESET";

export const set = (key, value) => ({ type: SET, key, value });
export const reset = () => ({ type: RESET });

const getToken = (getState) => {
  const accessToken = getState().user.get("accessToken");
  return `Bearer ${accessToken}`;
};

export const getAll = (threadId) => async (dispatch, getState) => {
  const accessToken = getToken(getState);
  const res = await messageService.list(threadId, accessToken);
  if (res.data) {
    const { messages, ...rest } = res.data;
    dispatch(set("thread", { ...rest }));
    dispatch(set("messages", messages));
  } else {
    dispatch(set("error", res));
  }
};

export const createThread = (title, description, forumId) => async (
  dispatch,
  getState
) => {
  const accessToken = getToken(getState);
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
    dispatch(set("error", res));
  }
};
