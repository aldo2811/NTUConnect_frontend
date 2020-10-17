import { createSelector } from "reselect";

const selectMessages = (state) => state.messages.get("messages");
const selectMessagesThread = (state) => state.messages.get("thread");
const selectMessagesError = (state) => state.messages.get("error");

export const selectMessagesJS = createSelector(
  selectMessages,
  (message) => message && message.toJS()
);

export const selectMessagesThreadJS = createSelector(
  selectMessagesThread,
  (thread) => thread && thread.toJS()
);

export const selectMessagesErrorJS = createSelector(
  selectMessagesError,
  (error) => error
);
