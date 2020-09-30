import { SET, RESET } from "../actions/user.action";

const initialState = {
  token: null,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET:
      return state.set(action.key, action.value);
    case RESET:
      return initialState;
    default:
      return state;
  }
}
