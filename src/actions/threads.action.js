import threadService from "../services/threads.service";
import forumService from "../services/forums.service";
import userService from "../services/user.service";

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
  const res = await threadService.list(accessToken);
  if (res.data) {
    const users = await userService.list(accessToken);
    if (users.data) {
      const userMap = {};
      users.data.forEach((user) => {
        userMap[user.id] = user.username;
      });
      res.data.forEach((thread) => {
        thread.username = userMap[thread.creator];
      });
    }

    const forums = await forumService.list(accessToken);
    if (forums.data) {
      const forumMap = {};
      forums.data.forEach((forum) => {
        forumMap[forum.id] = forum.courseCode;
      });
      res.data.forEach((thread) => {
        thread.courseCode = forumMap[thread.forum];
      });
    }
    dispatch(set("forum", {}));
    dispatch(set("threads", res.data));
  } else {
    dispatch(set("error", res));
  }
};

export const getThreadsOfForum = (forumId) => async (dispatch, getState) => {
  const accessToken = getToken(getState);
  const res = await forumService.detail(forumId, accessToken);
  if (res.data) {
    const users = await userService.list(accessToken);
    if (users.data) {
      const userMap = {};
      users.data.forEach((user) => {
        userMap[user.id] = user.username;
      });
      res.data.threads.forEach((thread) => {
        thread.username = userMap[thread.creator];
      });
    }

    const { threads, ...rest } = res.data;
    dispatch(set("forum", { ...rest }));
    dispatch(set("threads", threads));
  } else {
    dispatch(set("errors", res));
  }
};
