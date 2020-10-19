import React, { useEffect } from "react";
import { connect } from "react-redux";

import ForumBox from "../../../components/ForumBox";

import appStyles from "../../../stylesheets/app.scss";

import {
  selectAllForumsJS,
  selectForumsLoadingJS,
} from "../../../selectors/forums.selector";
import {
  selectAllUsersJS,
  selectUserLoadingJS,
} from "../../../selectors/user.selector";

import * as forumActions from "../../../actions/forums.action";
import * as userActions from "../../../actions/user.action";

import { getUsernameById } from "../../../utils/helper";

const CourseList = ({
  allForums,
  allUsers,
  forumLoading,
  userLoading,
  getAllForums,
  getAllUsers,
  joinForum,
  resetForum,
}) => {
  useEffect(() => {
    getAllUsers();
    getAllForums();

    return () => resetForum();
  }, []);

  const onJoinClick = (forumId) => {
    joinForum(forumId);
  };

  if (forumLoading || userLoading) return null;

  return (
    <div className={appStyles.content_section}>
      <div>
        <h1 className={appStyles.heading}>All Courses</h1>
        <p className={appStyles.subheading}>All courses available</p>
      </div>
      {allForums &&
        allForums.map((forum) => {
          return (
            <ForumBox
              key={forum.id}
              username={getUsernameById(allUsers, forum.creator)}
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
  const allUsers = selectAllUsersJS(state);
  const forumLoading = selectForumsLoadingJS(state);
  const userLoading = selectUserLoadingJS(state);
  return { allForums, allUsers, forumLoading, userLoading };
};

const mapDispatchToProps = {
  getAllForums: forumActions.getAll,
  getAllUsers: userActions.getAll,
  joinForum: forumActions.joinForum,
  resetForum: forumActions.reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
