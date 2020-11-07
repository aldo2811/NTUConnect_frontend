import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import QuestionInput from "../../../components/QuestionInput";

import styles from "./styles.scss";
import appStyles from "../../../stylesheets/app.scss";

import { selectRedirectJS } from "../../../selectors/redirect.selector";
import { selectMessagesLoadingJS } from "../../../selectors/messages.selector";

import * as messageActions from "../../../actions/messages.action";
import * as redirectActions from "../../../actions/redirect.action";
import * as sidebarActions from "../../../actions/sidebar.action";

const AskQuestionPage = ({
  redirect,
  loading,
  createThread,
  cancelLoading,
  resetMessages,
  resetRedirect,
  setSidebar,
  match: {
    params: { courseId },
  },
}) => {
  useEffect(() => {
    setSidebar(`courses/${courseId}`);
    cancelLoading();

    return () => {
      resetMessages();
      resetRedirect();
    };
  }, []);

  const onSubmitClick = (title, description) => {
    if (!loading) createThread(title, description, courseId);
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
  const loading = selectMessagesLoadingJS(state);
  return { redirect, loading };
};

const mapDispatchToProps = {
  createThread: messageActions.createThread,
  cancelLoading: messageActions.cancelLoading,
  resetMessages: messageActions.reset,
  resetRedirect: redirectActions.reset,
  setSidebar: sidebarActions.setSelected,
};

export default connect(mapStateToProps, mapDispatchToProps)(AskQuestionPage);
