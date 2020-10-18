import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import QuestionInput from "../../../components/QuestionInput";

import styles from "./styles.scss";
import appStyles from "../../../stylesheets/app.scss";

import {
  selectMessagesLoadingJS,
  selectMessagesThreadIdJS,
} from "../../../selectors/messages.selector";

import * as messageActions from "../../../actions/messages.action";

const AskQuestionPage = ({
  createThread,
  match: {
    params: { courseId },
  },
}) => {
  const history = useHistory();
  const onSubmitClick = (title, description) => {
    createThread(title, description, courseId);
    history.push(`/courses/${courseId}`);
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
  const messageLoading = selectMessagesLoadingJS(state);
  return { threadId, messageLoading };
};

const mapDispatchToProps = {
  createThread: messageActions.createThread,
};

export default connect(mapStateToProps, mapDispatchToProps)(AskQuestionPage);
