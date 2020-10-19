import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import {
  selectUserAccessTokenJS,
  selectUserErrorJS,
  selectUserRefreshTokenJS,
} from "../../selectors/user.selector";

import * as actions from "../../actions/user.action";

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
};

const WithAuth = (WrappedComponent) => {
  const WithAuthRedirect = ({
    accessToken,
    refreshToken,
    error,
    verifyAccess,
    ...rest
  }) => {
    const [finish, setFinish] = useState(false);
    useEffect(() => {
      verifyAccess().then(() => setTimeout(() => setFinish(true), 500));
    }, []);
    if (finish) {
      if (error) return <Redirect to="/login" push />;
      return <WrappedComponent {...rest} />;
    }

    return null;
  };

  const mapStateToProps = (state) => {
    const accessToken = selectUserAccessTokenJS(state);
    const refreshToken = selectUserRefreshTokenJS(state);
    const error = selectUserErrorJS(state);
    return { accessToken, refreshToken, error };
  };

  const mapDispatchToProps = {
    verifyAccess: actions.verifyAccess,
  };

  WithAuthRedirect.displayname = `WithSubscription(${getDisplayName(
    WrappedComponent
  )})`;

  return connect(mapStateToProps, mapDispatchToProps)(WithAuthRedirect);
};

export default WithAuth;
