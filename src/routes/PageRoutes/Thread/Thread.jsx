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
import {
  selectAllUsersJS,
  selectUserLoadingJS,
  selectUserTypeJS,
} from "../../../selectors/user.selector";
import {
  selectAllForumsJS,
  selectForumsLoadingJS,
} from "../../../selectors/forums.selector";

import * as messageActions from "../../../actions/messages.action";
import * as userActions from "../../../actions/user.action";
import * as forumActions from "../../../actions/forums.action";

import { getCourseCodeById, getUsernameById } from "../../../utils/helper";

const Thread = ({
  thread,
  allMessages,
  allUsers,
  allForums,
  messageLoading,
  userLoading,
  forumLoading,
  userType,
  getAllMessage,
  getAllUser,
  getAllForums,
  createMessage,
  upvoteMessage,
  markSolvedMessage,
  resetMessage,
  match: {
    params: { threadId },
  },
}) => {
  useEffect(() => {
    getAllUser();
    getAllForums();
    getAllMessage(threadId);

    return () => resetMessage();
  }, []);

  const onSubmitClick = (content) => {
    createMessage(content, threadId);
  };

  const onVote = (action, messageId) => {
    upvoteMessage(action, messageId);
  };

  const onMarkSolved = (isCorrect, messageId) => {
    markSolvedMessage(isCorrect, messageId, threadId);
  };

  if (messageLoading || userLoading || forumLoading) return null;

  return (
    <div className={appStyles.content_section}>
      <QuestionBox
        username={getUsernameById(allUsers, thread.creator)}
        courseCode={getCourseCodeById(allForums, thread.forum)}
        {...thread}
      />
      <AnswerInput onSubmitClick={onSubmitClick} />
      {allMessages.map((answer) => {
        return (
          <AnswerBox
            key={answer.id}
            username={getUsernameById(allUsers, answer.creator)}
            onVote={onVote}
            userType={userType}
            threadSolved={thread.solved}
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
  const allUsers = selectAllUsersJS(state);
  const allForums = selectAllForumsJS(state);
  const messageLoading = selectMessagesLoadingJS(state);
  const userLoading = selectUserLoadingJS(state);
  const forumLoading = selectForumsLoadingJS(state);
  const userType = selectUserTypeJS(state);

  return {
    thread,
    allMessages,
    allUsers,
    allForums,
    messageLoading,
    userLoading,
    forumLoading,
    userType,
  };
};

const mapDispatchToProps = {
  getAllMessage: messageActions.getAll,
  getAllUser: userActions.getAll,
  getAllForums: forumActions.getAll,
  createMessage: messageActions.createMessage,
  upvoteMessage: messageActions.upvoteMessage,
  markSolvedMessage: messageActions.markSolvedMessage,
  resetMessage: messageActions.reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Thread);
