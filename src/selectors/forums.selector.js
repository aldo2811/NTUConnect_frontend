import { createSelector } from "reselect";

const selectAllForums = (state) => state.forums.get("forums");
const selectForumsError = (state) => state.forums.get("error");

export const selectAllForumsJS = createSelector(
  selectAllForums,
  (forums) => forums && forums.toJS()
);

export const selectForumsErrorJS = createSelector(
  selectForumsError,
  (error) => error
);
