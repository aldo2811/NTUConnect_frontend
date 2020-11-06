import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import QuestionInput from "../../../components/QuestionInput";

import styles from "./styles.scss";
import appStyles from "../../../stylesheets/app.scss";

import { selectRedirectJS } from "../../../selectors/redirect.selector";
import { selectErrorJS } from "../../../selectors/error.selector";

import * as messageActions from "../../../actions/messages.action";
import * as redirectActions from "../../../actions/redirect.action";
import * as sidebarActions from "../../../actions/sidebar.action";

const AskQuestionPage = ({
  redirect,
  error,
  createThread,
  resetRedirect,
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

    return () => resetRedirect();
  });

  const onSubmitClick = (title, description) => {
    createThread(title, description, courseId);
  };

  if (redirect) {
    return <Redirect to={`/courses/${courseId}`} />;
  }

  return (
    <div className={appStyles.content_section}>
      <h1 className={styles.heading}>Ask a Question</h1>
      <QuestionInput onSubmitClick={onSubmitClick} />
    </div>
  );
};

const mapStateToProps = (state) => {
  const redirect = selectRedirectJS(state);
  const error = selectErrorJS(state);
  return { redirect, error };
};

const mapDispatchToProps = {
  createThread: messageActions.createThread,
  resetRedirect: redirectActions.reset,
  setSidebar: sidebarActions.setSelected,
};

export default connect(mapStateToProps, mapDispatchToProps)(AskQuestionPage);
