import { createSelector } from "reselect";

const selectAllUsers = (state) => state.user.get("users");
const selectUser = (state) => state.user.get("user");
const selectUserAccessToken = (state) => state.user.get("accessToken");
const selectUserRefreshToken = (state) => state.user.get("refreshToken");
const selectUserLoading = (state) => state.user.get("loading");
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

export const selectUserLoadingJS = createSelector(
  selectUserLoading,
  (loading) => loading
);

export const selectUserErrorJS = createSelector(
  selectUserError,
  (error) => error
);
