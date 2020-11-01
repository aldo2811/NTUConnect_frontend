import { fromJS } from "immutable";
import { SET, UPDATE, UPDATE_REPLIES, RESET } from "../actions/messages.action";

const initialState = fromJS({
  thread: {},
  messages: [],
  loading: true,
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET:
      return state.set(action.key, fromJS(action.value));
    case UPDATE:
      return state.update(action.key, (list) =>
        list.push(fromJS(action.value))
      );
    case UPDATE_REPLIES:
      return state.updateIn(
        [
          action.key,
          state
            .get(action.key)
            .findIndex((item) => item.id === action.value.reply),
          "replies",
        ],
        (list) => list.push(fromJS(action.value))
      );
    case RESET:
      return initialState;
    default:
      return state;
  }
}
