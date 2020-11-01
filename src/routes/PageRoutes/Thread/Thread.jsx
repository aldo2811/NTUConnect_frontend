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
import * as sidebarActions from "../../../actions/sidebar.action";

const Thread = ({
  thread,
  allMessages,
  messageLoading,
  userType,
  getAllMessage,
  createMessage,
  replyMessage,
  upvoteMessage,
  markSolvedMessage,
  resetMessage,
  setSidebar,
  match: {
    params: { courseId, threadId },
  },
}) => {
  useEffect(() => {
    getAllMessage(threadId);
    setSidebar(`courses/${courseId}`);

    return () => resetMessage();
  }, []);

  const onSubmitClick = (content) => {
    if (content) createMessage(content, threadId);
  };

  const onReplySubmit = (messageId) => (content) => {
    replyMessage(content, threadId, messageId);
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
      {allMessages &&
        allMessages.map((answer) => {
          return (
            <AnswerBox
              key={answer.id}
              onVote={onVote}
              userType={userType}
              onMarkSolved={onMarkSolved}
              onReplySubmit={onReplySubmit(answer.id)}
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
  replyMessage: messageActions.replyMessage,
  upvoteMessage: messageActions.upvoteMessage,
  markSolvedMessage: messageActions.markSolvedMessage,
  resetMessage: messageActions.reset,
  setSidebar: sidebarActions.setSelected,
};

export default connect(mapStateToProps, mapDispatchToProps)(Thread);
