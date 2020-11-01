import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import logger from "../middleware/logger";

const store = (rootReducer) =>
  createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(reduxThunk, logger))
  );

export default store;
