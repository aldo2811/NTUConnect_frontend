import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import QuestionInput from "../../../components/QuestionInput";

import styles from "./styles.scss";
import appStyles from "../../../stylesheets/app.scss";

import * as actions from "../../../actions/messages.action";
import { selectMessagesThreadIdJS } from "../../../selectors/messages.selector";

const AskQuestionPage = ({
  createThread,
  match: {
    params: { courseId },
  },
}) => {
  const history = useHistory();
  const onSubmitClick = (title, description) => {
    createThread(title, description, courseId).then(() => {
      history.push(`/courses/${courseId}`);
    });
  };

  return (
    <div className={appStyles.content_section}>
      <h1 className={styles.heading}>Ask a Question</h1>
      <QuestionInput onSubmitClick={onSubmitClick} />
    </div>
  );
};

const mapStateToProps = (state) => {
  const threadId = selectMessagesThreadIdJS(state);
  return { threadId };
};

const mapDispatchToProps = {
  createThread: actions.createThread,
};

export default connect(mapStateToProps, mapDispatchToProps)(AskQuestionPage);
