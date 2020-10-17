import { createSelector } from "reselect";

export const selectUser = (state) => state.user.get("user");
export const selectUserAccessToken = (state) => state.user.get("accessToken");
export const selectUserRefreshToken = (state) => state.user.get("refreshToken");
export const selectUserError = (state) => state.user.get("error");

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
