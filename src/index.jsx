import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import createStore from "./store/createStore";
import rootReducer from "./reducers";
import Route from "./routes";
import "./services/interceptor";

import "./stylesheets/app.scss";

ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <Route />
  </Provider>,
  document.getElementById("app")
);
module.hot.accept();
