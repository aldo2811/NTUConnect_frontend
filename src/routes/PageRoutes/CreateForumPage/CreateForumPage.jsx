import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import appStyles from "../../../stylesheets/app.scss";
import styles from "./styles.scss";

import ForumInput from "../../../components/ForumInput";

import * as forumActions from "../../../actions/forums.action";
import * as sidebarActions from "../../../actions/sidebar.action";

const CreateForumPage = ({ createForum, setSidebar }) => {
  useEffect(() => {
    setSidebar(`courses`);
  }, []);

  const history = useHistory();

  const onSubmitClick = (courseTitle, courseCode) => {
    if (courseTitle && courseCode) {
      createForum(courseTitle, courseCode);
      history.push(`/courses`);
    }
  };

  return (
    <div className={appStyles.content_section}>
      <h1 className={styles.heading}>Create a Forum</h1>
      <ForumInput onSubmitClick={onSubmitClick} />
    </div>
  );
};

const mapDispatchToProps = {
  createForum: forumActions.createForum,
  setSidebar: sidebarActions.setSelected,
};

export default connect(null, mapDispatchToProps)(CreateForumPage);
