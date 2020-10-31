import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import QuestionInput from "../../../components/QuestionInput";

import styles from "./styles.scss";
import appStyles from "../../../stylesheets/app.scss";

import * as messageActions from "../../../actions/messages.action";
import * as sidebarActions from "../../../actions/sidebar.action";

const AskQuestionPage = ({
  createThread,
  setSidebar,
  match: {
    params: { courseId },
  },
}) => {
  useEffect(() => {
    setSidebar(`courses/${courseId}`);
  });
  const history = useHistory();
  const onSubmitClick = (title, description) => {
    if (title && description) {
      createThread(title, description, courseId);
      history.push(`/courses/${courseId}`);
    }
  };

  return (
    <div className={appStyles.content_section}>
      <h1 className={styles.heading}>Ask a Question</h1>
      <QuestionInput onSubmitClick={onSubmitClick} />
    </div>
  );
};

const mapDispatchToProps = {
  createThread: messageActions.createThread,
  setSidebar: sidebarActions.setSelected,
};

export default connect(null, mapDispatchToProps)(AskQuestionPage);
