import React, { useEffect } from "react";
import { connect } from "react-redux";

import ForumBox from "../../../components/ForumBox";

import {
  selectAllForumsJS,
  selectForumsErrorJS,
} from "../../../selectors/forums.selector";

import * as actions from "../../../actions/forums.action";

import appStyles from "../../../stylesheets/app.scss";

const CourseList = ({ allForums, reset, getAll, joinForum }) => {
  useEffect(() => {
    getAll();
    return () => reset();
  }, []);

  const onJoinClick = (forumId) => {
    joinForum(forumId);
  };

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
  const error = selectForumsErrorJS(state);
  return { allForums, error };
};

const mapDispatchToProps = {
  getAll: actions.getAll,
  reset: actions.reset,
  joinForum: actions.joinForum,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
