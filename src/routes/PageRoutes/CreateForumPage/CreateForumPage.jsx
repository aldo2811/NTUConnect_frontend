import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import ForumInput from "../../../components/ForumInput";

import appStyles from "../../../stylesheets/app.scss";
import styles from "./styles.scss";

import { selectErrorJS } from "../../../selectors/error.selector";

import * as forumActions from "../../../actions/forums.action";
import * as sidebarActions from "../../../actions/sidebar.action";

const CreateForumPage = ({ error, createForum, setSidebar }) => {
  const errorRef = useRef(error);

  useEffect(() => {
    errorRef.current = error;
  });

  useEffect(() => {
    setSidebar(`courses`);
  }, []);

  const history = useHistory();

  const onSubmitClick = (courseTitle, courseCode) => {
    createForum(courseTitle, courseCode).then(() => {
      setTimeout(() => {
        if (Object.keys(errorRef.current).length === 0)
          history.push(`/courses`);
      }, 100);
    });
  };

  return (
    <div className={appStyles.content_section}>
      <h1 className={styles.heading}>Create a Forum</h1>
      <ForumInput onSubmitClick={onSubmitClick} />
    </div>
  );
};

const mapStateToProps = (state) => {
  const error = selectErrorJS(state);

  return { error };
};

const mapDispatchToProps = {
  createForum: forumActions.createForum,
  setSidebar: sidebarActions.setSelected,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateForumPage);
