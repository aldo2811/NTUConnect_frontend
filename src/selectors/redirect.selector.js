import { createSelector } from "reselect";

const selectRedirect = (state) => state.redirect.get("redirect");

// eslint-disable-next-line import/prefer-default-export
export const selectRedirectJS = createSelector(
  selectRedirect,
  (redirect) => redirect
);
