import { combineReducers } from "redux";
import user from "./user.reducer";
import forums from "./forums.reducer";
import threads from "./threads.reducer";

export default combineReducers({
  user,
  forums,
  threads,
});
