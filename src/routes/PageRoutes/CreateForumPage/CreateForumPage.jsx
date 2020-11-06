import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import ForumInput from "../../../components/ForumInput";

import appStyles from "../../../stylesheets/app.scss";
import styles from "./styles.scss";

import { selectErrorJS } from "../../../selectors/error.selector";
import { selectRedirectJS } from "../../../selectors/redirect.selector";

import * as forumActions from "../../../actions/forums.action";
import * as redirectActions from "../../../actions/redirect.action";
import * as sidebarActions from "../../../actions/sidebar.action";

const CreateForumPage = ({
  redirect,
  error,
  createForum,
  resetRedirect,
  setSidebar,
}) => {
  const errorRef = useRef(error);

  useEffect(() => {
    errorRef.current = error;
  });

  useEffect(() => {
    setSidebar(`courses`);

    return () => resetRedirect();
  }, []);

  const onSubmitClick = (courseTitle, courseCode) => {
    createForum(courseTitle, courseCode);
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
  const error = selectErrorJS(state);

  return { redirect, error };
};

const mapDispatchToProps = {
  createForum: forumActions.createForum,
  resetRedirect: redirectActions.reset,
  setSidebar: sidebarActions.setSelected,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateForumPage);
