import React, { useEffect } from "react";
import { connect } from "react-redux";

import ForumBox from "../../../components/ForumBox";

import appStyles from "../../../stylesheets/app.scss";

import {
  selectAllForumsJS,
  selectForumsErrorJS,
  selectForumsLoadingJS,
} from "../../../selectors/forums.selector";

import * as forumActions from "../../../actions/forums.action";

const CourseList = ({
  allForums,
  forumLoading,
  getAll,
  joinForum,
  resetForum,
}) => {
  useEffect(() => {
    getAll();

    return () => resetForum();
  }, []);

  const onJoinClick = (forumId) => {
    joinForum(forumId);
  };

  if (forumLoading) return null;

  return (
    <div className={appStyles.content_section}>
      <div>
        <h1 className={appStyles.heading}>All Courses</h1>
        <p className={appStyles.subheading}>All courses available</p>
      </div>
      {allForums &&
        allForums.map((forum) => {
          return (
            <ForumBox key={forum.id} onJoinClick={onJoinClick} {...forum} />
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  const allForums = selectAllForumsJS(state);
  const forumLoading = selectForumsLoadingJS(state);
  const error = selectForumsErrorJS(state);
  return { allForums, forumLoading, error };
};

const mapDispatchToProps = {
  getAll: forumActions.getAll,
  joinForum: forumActions.joinForum,
  resetForum: forumActions.reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
