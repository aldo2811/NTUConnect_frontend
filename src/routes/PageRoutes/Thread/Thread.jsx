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
import * as action from "../../../actions/messages.action";

const Thread = ({
  thread,
  messages,
  getAll,
  match: {
    params: { threadId },
  },
}) => {
  useEffect(() => {
    getAll(threadId);
  }, []);

  return (
    <div className={appStyles.content_section}>
      <QuestionBox {...thread} />
      <AnswerInput />
      {messages.map((answer) => {
        console.log(answer);
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
  getAll: action.getAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(Thread);
