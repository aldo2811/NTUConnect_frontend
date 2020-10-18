import { createSelector } from "reselect";

const selectAllUsers = (state) => state.user.get("users");
const selectUser = (state) => state.user.get("user");
const selectUserAccessToken = (state) => state.user.get("accessToken");
const selectUserRefreshToken = (state) => state.user.get("refreshToken");
const selectUserError = (state) => state.user.get("error");

export const selectAllUsersJS = createSelector(
  selectAllUsers,
  (users) => users && users.toJS()
);

export const selectUserJS = createSelector(
  selectUser,
  (user) => user && user.toJS()
);

export const selectUserAccessTokenJS = createSelector(
  selectUserAccessToken,
  (accessToken) => accessToken
);

export const selectUserRefreshTokenJS = createSelector(
  selectUserRefreshToken,
  (refreshToken) => refreshToken
);

export const selectUserErrorJS = createSelector(
  selectUserError,
  (error) => error
);
