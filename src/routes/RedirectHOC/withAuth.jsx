import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, useLocation } from "react-router-dom";

import {
  selectUserAccessTokenJS,
  selectUserErrorJS,
  selectUserTypeJS,
} from "../../selectors/user.selector";
import { selectErrorJS } from "../../selectors/error.selector";

import * as actions from "../../actions/user.action";

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
};

const WithAuth = (WrappedComponent) => {
  const WithAuthRedirect = ({
    accessToken,
    verifyError,
    userType,
    verifyAccess,
    getCurrentUser,
    error,
    ...rest
  }) => {
    const url = useLocation().pathname;
    const [finish, setFinish] = useState(false);
    useEffect(() => {
      verifyAccess()
        .then(() => {
          setTimeout(() => {
            getCurrentUser();
          }, 500);
        })
        .then(() => setFinish(true));
    }, [url]);

    if (verifyError || error.status === 401)
      return <Redirect to="/login" push />;
    if (finish) return <WrappedComponent {...rest} />;

    return null;
  };

  const mapStateToProps = (state) => {
    const accessToken = selectUserAccessTokenJS(state);
    const verifyError = selectUserErrorJS(state);
    const userType = selectUserTypeJS(state);
    const error = selectErrorJS(state);
    return { accessToken, verifyError, userType, error };
  };

  const mapDispatchToProps = {
    getCurrentUser: actions.getCurrentUser,
    verifyAccess: actions.verifyAccess,
  };

  WithAuthRedirect.displayname = `WithSubscription(${getDisplayName(
    WrappedComponent
  )})`;

  return connect(mapStateToProps, mapDispatchToProps)(WithAuthRedirect);
};

export default WithAuth;
