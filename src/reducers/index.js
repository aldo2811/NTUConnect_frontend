import { combineReducers } from "redux";

import user from "./user.reducer";
import forums from "./forums.reducer";
import threads from "./threads.reducer";
import messages from "./messages.reducer";
import error from "./error.reducer";
import sidebar from "./sidebar.reducer";

export default combineReducers({
  user,
  forums,
  threads,
  messages,
  error,
  sidebar,
});
