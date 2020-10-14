import { SET, RESET } from "../actions/user.action";

const initialState = {
  user: {},
  token: null,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET:
      return action.value;
    case RESET:
      return initialState;
    default:
      return state;
  }
}
