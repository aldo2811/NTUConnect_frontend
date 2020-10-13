import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PageRoutes from "./PageRoutes";
import Login from "./Login";
import Register from "./Register";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route path="/" component={PageRoutes} />
      </Switch>
    </Router>
  );
};

export default App;
