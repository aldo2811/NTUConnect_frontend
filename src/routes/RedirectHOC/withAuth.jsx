import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import {
  selectUserAccessTokenJS,
  selectUserErrorJS,
} from "../../selectors/user.selector";

import * as actions from "../../actions/user.action";

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
};

const WithAuth = (WrappedComponent) => {
  const WithAuthRedirect = ({
    accessToken,
    verifyError,
    verifyAccess,
    ...rest
  }) => {
    const [finish, setFinish] = useState(false);
    useEffect(() => {
      verifyAccess().then(() => setTimeout(() => setFinish(true), 500));
    }, []);

    if (verifyError) return <Redirect to="/login" push />;
    if (finish) return <WrappedComponent {...rest} />;

    return null;
  };

  const mapStateToProps = (state) => {
    const accessToken = selectUserAccessTokenJS(state);
    const verifyError = selectUserErrorJS(state);
    return { accessToken, verifyError };
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
