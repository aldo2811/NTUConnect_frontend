import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PageRoutes from "./PageRoutes";
import Login from "./Login";
import Register from "./Register";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route path="/" component={PageRoutes} />
        </Switch>
      </ErrorBoundary>
    </Router>
  );
};

export default hot(App);
