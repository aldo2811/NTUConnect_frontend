import { fromJS } from "immutable";
import { SET, RESET } from "../actions/user.action";

const initialState = fromJS({
  users: [],
  user: {},
  refreshToken: "",
  accessToken: "",
  error: null,
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
