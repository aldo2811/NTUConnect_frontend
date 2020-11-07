import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import ForumInput from "../../../components/ForumInput";

import appStyles from "../../../stylesheets/app.scss";
import styles from "./styles.scss";

import { selectRedirectJS } from "../../../selectors/redirect.selector";
import { selectForumsLoadingJS } from "../../../selectors/forums.selector";

import * as forumActions from "../../../actions/forums.action";
import * as redirectActions from "../../../actions/redirect.action";
import * as sidebarActions from "../../../actions/sidebar.action";

const CreateForumPage = ({
  redirect,
  loading,
  createForum,
  cancelLoading,
  resetRedirect,
  setSidebar,
}) => {
  useEffect(() => {
    setSidebar(`courses`);
    cancelLoading();

    return () => {
      resetRedirect();
    };
  }, []);

  const onSubmitClick = (courseTitle, courseCode) => {
    if (!loading) createForum(courseTitle, courseCode);
  };

  if (redirect) return <Redirect to="/courses" />;

  return (
    <div className={appStyles.content_section}>
      <h1 className={styles.heading}>Create a Forum</h1>
      <ForumInput onSubmitClick={onSubmitClick} />
    </div>
  );
};

const mapStateToProps = (state) => {
  const redirect = selectRedirectJS(state);
  const loading = selectForumsLoadingJS(state);

  return { redirect, loading };
};

const mapDispatchToProps = {
  createForum: forumActions.createForum,
  cancelLoading: forumActions.cancelLoading,
  resetRedirect: redirectActions.reset,
  setSidebar: sidebarActions.setSelected,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateForumPage);
