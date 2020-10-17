import { fromJS } from "immutable";
import { SET, RESET } from "../actions/threads.action";

const initialState = fromJS({
  forum: {},
  threads: [],
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
