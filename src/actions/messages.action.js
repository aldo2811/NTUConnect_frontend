import messageService from "../services/messages.service";

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
    console.log(res.data);
    const { messages, ...rest } = res.data;
    dispatch(set("thread", { ...rest }));
    dispatch(set("messages", messages));
  } else {
    dispatch(set("error", res));
  }
};
