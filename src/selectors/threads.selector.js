import { createSelector } from "reselect";

const selectThreads = (state) => state.threads.get("threads");
const selectThreadsForum = (state) => state.threads.get("forum");
const selectThreadsError = (state) => state.threads.get("error");

export const selectThreadsJS = createSelector(
  selectThreads,
  (threads) => threads && threads.toJS()
);

export const selectThreadsForumJS = createSelector(
  selectThreadsForum,
  (forum) => forum && forum.toJS()
);
export const selectThreadsErrorJS = createSelector(
  selectThreadsError,
  (error) => error
);
