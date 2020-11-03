import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import QuestionInput from "../../../components/QuestionInput";

import styles from "./styles.scss";
import appStyles from "../../../stylesheets/app.scss";

import { selectErrorJS } from "../../../selectors/error.selector";

import * as messageActions from "../../../actions/messages.action";
import * as sidebarActions from "../../../actions/sidebar.action";

const AskQuestionPage = ({
  error,
  createThread,
  setSidebar,
  match: {
    params: { courseId },
  },
}) => {
  const errorRef = useRef(error);

  useEffect(() => {
    errorRef.current = error;
  });

  useEffect(() => {
    setSidebar(`courses/${courseId}`);
  });

  const history = useHistory();

  const onSubmitClick = (title, description) => {
    createThread(title, description, courseId).then(() => {
      setTimeout(() => {
        if (Object.keys(errorRef.current).length === 0)
          history.push(`/courses/${courseId}`);
      }, 100);
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
  const error = selectErrorJS(state);
  return { error };
};

const mapDispatchToProps = {
  createThread: messageActions.createThread,
  setSidebar: sidebarActions.setSelected,
};

export default connect(mapStateToProps, mapDispatchToProps)(AskQuestionPage);
