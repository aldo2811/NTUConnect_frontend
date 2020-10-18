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
import {
  selectAllUsersJS,
  selectUserLoadingJS,
} from "../../../selectors/user.selector";
import {
  selectAllForumsJS,
  selectForumsLoadingJS,
} from "../../../selectors/forums.selector";

import * as messageActions from "../../../actions/messages.action";
import * as userActions from "../../../actions/user.action";
import * as forumActions from "../../../actions/forums.action";

const Thread = ({
  thread,
  allMessages,
  allUsers,
  allForums,
  messageLoading,
  userLoading,
  forumLoading,
  getAllMessage,
  getAllUser,
  getAllForums,
  createMessage,
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

  if (messageLoading || userLoading || forumLoading) return null;

  return (
    <div className={appStyles.content_section}>
      <QuestionBox
        username={allUsers.find((user) => user.id === thread.creator).username}
        courseCode={
          allForums.find((forum) => forum.id === thread.forum).courseCode
        }
        {...thread}
      />
      <AnswerInput onSubmitClick={onSubmitClick} />
      {allMessages.map((answer) => {
        return (
          <AnswerBox
            key={answer.id}
            username={
              allUsers.find((user) => user.id === answer.creator).username
            }
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
  const error = selectMessagesErrorJS(state);

  return {
    thread,
    allMessages,
    allUsers,
    allForums,
    messageLoading,
    userLoading,
    forumLoading,
    error,
  };
};

const mapDispatchToProps = {
  getAllMessage: messageActions.getAll,
  getAllUser: userActions.getAll,
  getAllForums: forumActions.getAll,
  createMessage: messageActions.createMessage,
  resetMessage: messageActions.reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Thread);
