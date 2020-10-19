import { fromJS } from "immutable";
import { SET, RESET } from "../actions/error.action";

const initialState = fromJS({ error: null });

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case SET:
      return state.set(action.key, fromJS(action.value));
    case RESET:
      return initialState;
    default:
      return state;
  }
}
