import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PageRoutes from "./PageRoutes";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={PageRoutes} />
      </Switch>
    </Router>
  );
};

export default App;
