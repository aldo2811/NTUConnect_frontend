import { fromJS } from "immutable";
import { SET, RESET } from "../actions/sidebar.action";

const initialState = fromJS({ selected: null });

export default function sidebarReducer(state = initialState, action) {
  switch (action.type) {
    case SET:
      return state.set(action.key, fromJS(action.value));
    case RESET:
      return initialState;
    default:
      return state;
  }
}
