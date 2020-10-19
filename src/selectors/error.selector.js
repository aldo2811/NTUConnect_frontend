import { createSelector } from "reselect";

const selectError = (state) => state.error.get("error");

// eslint-disable-next-line import/prefer-default-export
export const selectErrorJS = createSelector(selectError, (error) => error);
