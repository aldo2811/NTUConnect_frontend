import React, { useEffect } from "react";
import { connect } from "react-redux";

import ThreadBox from "../../../components/ThreadBox";

import appStyles from "../../../stylesheets/app.scss";

import {
  selectThreadsJS,
  selectThreadsLoadingJS,
} from "../../../selectors/threads.selector";
import {
  selectAllForumsJS,
  selectForumsLoadingJS,
} from "../../../selectors/forums.selector";
import {
  selectAllUsersJS,
  selectUserLoadingJS,
} from "../../../selectors/user.selector";

import * as threadActions from "../../../actions/threads.action";
import * as userActions from "../../../actions/user.action";
import * as forumActions from "../../../actions/forums.action";

import { getCourseCodeById, getUsernameById } from "../../../utils/helper";

const Home = ({
  allThreads,
  allUsers,
  allForums,
  threadLoading,
  forumLoading,
  userLoading,
  getAllThreads,
  getAllUsers,
  getAllForums,
  resetThread,
}) => {
  useEffect(() => {
    getAllThreads();
    getAllUsers();
    getAllForums();

    return () => resetThread();
  }, []);

  if (threadLoading || userLoading || forumLoading) return null;
  return (
    <div className={appStyles.content_section}>
      <h1 className={appStyles.heading}>All Discussions</h1>
      <p className={appStyles.subheading}>
        All discussions in courses which you joined
      </p>
      {allThreads.map((thread) => {
        return (
          <ThreadBox
            key={thread.id}
            username={getUsernameById(allUsers, thread.creator)}
            courseCode={getCourseCodeById(allForums, thread.forum)}
            {...thread}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  const allThreads = selectThreadsJS(state);
  const allUsers = selectAllUsersJS(state);
  const allForums = selectAllForumsJS(state);
  const threadLoading = selectThreadsLoadingJS(state);
  const forumLoading = selectForumsLoadingJS(state);
  const userLoading = selectUserLoadingJS(state);

  return {
    allThreads,
    allUsers,
    allForums,
    threadLoading,
    forumLoading,
    userLoading,
  };
};

const mapDispatchToProps = {
  getAllThreads: threadActions.getAll,
  getAllUsers: userActions.getAll,
  getAllForums: forumActions.getAll,
  resetThread: threadActions.reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
