import React, { useEffect } from "react";
import { connect } from "react-redux";

import QuestionBox from "../../../components/QuestionBox";
import AnswerInput from "../../../components/AnswerInput";
import AnswerBox from "../../../components/AnswerBox";

import appStyles from "../../../stylesheets/app.scss";
import {
  selectMessagesErrorJS,
  selectMessagesJS,
  selectMessagesThreadJS,
} from "../../../selectors/messages.selector";
import * as actions from "../../../actions/messages.action";

const Thread = ({
  thread,
  messages,
  reset,
  getAll,
  createMessage,
  match: {
    params: { threadId },
  },
}) => {
  useEffect(() => {
    getAll(threadId);
    return () => reset();
  }, []);

  const onSubmitClick = (content) => {
    createMessage(content, threadId);
  };

  if (!thread) return null;
  return (
    <div className={appStyles.content_section}>
      <QuestionBox {...thread} />
      <AnswerInput onSubmitClick={onSubmitClick} />
      {messages.map((answer) => {
        return <AnswerBox key={answer.id} {...answer} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  const messages = selectMessagesJS(state);
  const thread = selectMessagesThreadJS(state);
  const error = selectMessagesErrorJS(state);
  return {
    messages,
    thread,
    error,
  };
};

const mapDispatchToProps = {
  getAll: actions.getAll,
  reset: actions.reset,
  createMessage: actions.createMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Thread);
