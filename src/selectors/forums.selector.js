import { createSelector } from "reselect";

const selectAllForums = (state) => state.forums.get("forums");
const selectForumsLoading = (state) => state.forums.get("loading");
const selectForumsError = (state) => state.forums.get("error");

export const selectAllForumsJS = createSelector(
  selectAllForums,
  (forums) => forums && forums.toJS()
);

export const selectAllForumsJoinedJS = createSelector(
  selectAllForums,
  (forums) => forums && forums.filter((forum) => forum.isJoined === true).toJS()
);

export const selectForumsLoadingJS = createSelector(
  selectForumsLoading,
  (loading) => loading
);

export const selectForumsErrorJS = createSelector(
  selectForumsError,
  (error) => error
);
