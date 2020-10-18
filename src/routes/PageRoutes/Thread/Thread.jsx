import React, { useEffect } from "react";
import { connect } from "react-redux";

import QuestionBox from "../../../components/QuestionBox";
import AnswerInput from "../../../components/AnswerInput";
import AnswerBox from "../../../components/AnswerBox";

import appStyles from "../../../stylesheets/app.scss";
import {
  selectMessagesErrorJS,
  selectMessagesJS,
  selectMessagesLoadingJS,
  selectMessagesThreadJS,
} from "../../../selectors/messages.selector";
import * as actions from "../../../actions/messages.action";
import * as userActions from "../../../actions/user.action";
import { selectAllUsersJS } from "../../../selectors/user.selector";

const Thread = ({
  thread,
  messages,
  messageLoading,
  users,
  resetMessages,
  getAllMessage,
  getAllUser,
  createMessage,
  match: {
    params: { threadId },
  },
}) => {
  useEffect(() => {
    getAllUser();
    getAllMessage(threadId);

    return () => resetMessages();
  }, []);

  const onSubmitClick = (content) => {
    createMessage(content, threadId);
  };

  console.log(messageLoading);
  if (messageLoading) return null;
  return (
    <div className={appStyles.content_section}>
      <QuestionBox
        username={users.find((user) => user.id === thread.creator).username}
        {...thread}
      />
      <AnswerInput onSubmitClick={onSubmitClick} />
      {messages.map((answer) => {
        return (
          <AnswerBox
            key={answer.id}
            username={users.find((user) => user.id === answer.creator).username}
            {...answer}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  const messages = selectMessagesJS(state);
  const thread = selectMessagesThreadJS(state);
  const messageLoading = selectMessagesLoadingJS(state);
  const error = selectMessagesErrorJS(state);
  const users = selectAllUsersJS(state);
  return {
    messages,
    thread,
    messageLoading,
    error,
    users,
  };
};

const mapDispatchToProps = {
  getAllMessage: actions.getAll,
  resetMessages: actions.reset,
  createMessage: actions.createMessage,
  getAllUser: userActions.getAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(Thread);
