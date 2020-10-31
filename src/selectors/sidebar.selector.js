import { createSelector } from "reselect";

const selectSidebarSelected = (state) => state.sidebar.get("selected");

// eslint-disable-next-line import/prefer-default-export
export const selectSidebarSelectedJS = createSelector(
  selectSidebarSelected,
  (selected) => selected
);
