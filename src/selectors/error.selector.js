import { createSelector } from "reselect";

const selectError = (state) => state.error.get("error");

export const selectErrorJS = createSelector(
  selectError,
  (error) => error && error.toJS()
);

export const selectErrorMessageJS = createSelector(
  selectErrorJS,
  (error) => error.message
);

export const selectErrorStatusJS = createSelector(
  selectErrorJS,
  (error) => error.status
);
