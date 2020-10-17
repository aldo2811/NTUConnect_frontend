import { fromJS } from "immutable";
import { SET, RESET } from "../actions/messages.action";

const initialState = fromJS({
  thread: {},
  messages: [],
  error: "",
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET:
      return state.set(action.key, fromJS(action.value));
    case RESET:
      return initialState;
    default:
      return state;
  }
}
