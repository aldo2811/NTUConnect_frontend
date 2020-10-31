import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import cx from "classnames";

import ForumBox from "../../../components/ForumBox";
import Button from "../../../components/Button";

import styles from "./styles.scss";
import appStyles from "../../../stylesheets/app.scss";

import {
  selectAllForumsJS,
  selectForumsLoadingJS,
} from "../../../selectors/forums.selector";
import { selectUserTypeJS } from "../../../selectors/user.selector";

import * as forumActions from "../../../actions/forums.action";
import * as sidebarActions from "../../../actions/sidebar.action";

const CourseList = ({
  allForums,
  forumLoading,
  userType,
  joinForum,
  setSidebar,
}) => {
  useEffect(() => {
    setSidebar("courses");
  }, []);

  const currentUrl = useLocation().pathname;

  const onJoinClick = (forumId) => {
    joinForum(forumId);
  };

  if (forumLoading) return null;

  return (
    <div
      className={cx({
        [appStyles.content_section]: true,
        [styles.container]: true,
      })}
    >
      {userType === "IN" && (
        <Link to={`${currentUrl}/new`}>
          <Button className={styles.button_create} size="large">
            Create Forum
          </Button>
        </Link>
      )}
      <h1 className={appStyles.heading}>All Courses</h1>
      <p className={appStyles.subheading}>All courses available</p>
      {allForums &&
        allForums.map((forum) => {
          return (
            <ForumBox
              key={forum.id}
              userType={userType}
              onJoinClick={onJoinClick}
              {...forum}
            />
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  const allForums = selectAllForumsJS(state);
  const forumLoading = selectForumsLoadingJS(state);
  const userType = selectUserTypeJS(state);
  return { allForums, forumLoading, userType };
};

const mapDispatchToProps = {
  joinForum: forumActions.joinForum,
  setSidebar: sidebarActions.setSelected,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
