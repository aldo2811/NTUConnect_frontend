import React, { useEffect } from "react";
import { connect } from "react-redux";

import QuestionBox from "../../../components/QuestionBox";
import AnswerInput from "../../../components/AnswerInput";
import AnswerBox from "../../../components/AnswerBox";

import appStyles from "../../../stylesheets/app.scss";

import {
  selectMessagesJS,
  selectMessagesLoadingJS,
  selectMessagesThreadJS,
} from "../../../selectors/messages.selector";
import { selectUserTypeJS } from "../../../selectors/user.selector";

import * as messageActions from "../../../actions/messages.action";

const Thread = ({
  thread,
  allMessages,
  messageLoading,
  userType,
  getAllMessage,
  createMessage,
  upvoteMessage,
  markSolvedMessage,
  resetMessage,
  match: {
    params: { threadId },
  },
}) => {
  useEffect(() => {
    getAllMessage(threadId);

    return () => resetMessage();
  }, []);

  const onSubmitClick = (content) => {
    if (content) createMessage(content, threadId);
  };

  const onVote = (action, messageId) => {
    upvoteMessage(action, messageId);
  };

  const onMarkSolved = (isCorrect, messageId) => {
    markSolvedMessage(isCorrect, messageId, threadId);
  };

  if (messageLoading) return null;

  return (
    <div className={appStyles.content_section}>
      <QuestionBox {...thread} />
      <AnswerInput onSubmitClick={onSubmitClick} />
      {allMessages.map((answer) => {
        return (
          <AnswerBox
            key={answer.id}
            onVote={onVote}
            userType={userType}
            onMarkSolved={onMarkSolved}
            {...answer}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  const thread = selectMessagesThreadJS(state);
  const allMessages = selectMessagesJS(state);
  const messageLoading = selectMessagesLoadingJS(state);
  const userType = selectUserTypeJS(state);

  return {
    thread,
    allMessages,
    messageLoading,
    userType,
  };
};

const mapDispatchToProps = {
  getAllMessage: messageActions.getAll,
  createMessage: messageActions.createMessage,
  upvoteMessage: messageActions.upvoteMessage,
  markSolvedMessage: messageActions.markSolvedMessage,
  resetMessage: messageActions.reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Thread);
