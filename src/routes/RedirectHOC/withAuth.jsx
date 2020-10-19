import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import {
  selectUserAccessTokenJS,
  selectUserErrorJS,
  selectUserTypeJS,
} from "../../selectors/user.selector";

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
    ...rest
  }) => {
    const [finish, setFinish] = useState(false);
    useEffect(() => {
      verifyAccess()
        .then(() => {
          setTimeout(() => {
            getCurrentUser();
          }, 500);
        })
        .then(() => setFinish(true));
    }, []);

    if (verifyError) return <Redirect to="/login" push />;
    if (finish) return <WrappedComponent {...rest} />;

    return null;
  };

  const mapStateToProps = (state) => {
    const accessToken = selectUserAccessTokenJS(state);
    const verifyError = selectUserErrorJS(state);
    const userType = selectUserTypeJS(state);
    return { accessToken, verifyError, userType };
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
