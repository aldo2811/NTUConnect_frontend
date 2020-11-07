import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PageRoutes from "./PageRoutes";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import WithAuth from "./RedirectHOC/withAuth";

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Switch>
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route path="/" component={WithAuth(PageRoutes)} />
        </Switch>
      </ErrorBoundary>
    </Router>
  );
};

export default hot(App);
