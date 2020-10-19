import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import cx from "classnames";

import ThreadBox from "../../../components/ThreadBox";
import Button from "../../../components/Button";

import styles from "./styles.scss";
import appStyles from "../../../stylesheets/app.scss";

import {
  selectThreadsJS,
  selectThreadsForumJS,
  selectThreadsLoadingJS,
} from "../../../selectors/threads.selector";
import {
  selectAllUsersJS,
  selectUserLoadingJS,
} from "../../../selectors/user.selector";

import * as threadActions from "../../../actions/threads.action";
import * as userActions from "../../../actions/user.action";

import { getUserNameScoreById } from "../../../utils/helper";

const CoursePage = ({
  forum,
  threads,
  allUsers,
  threadLoading,
  userLoading,
  getThreadsOfForum,
  getAllUsers,
  resetThread,
  match: {
    params: { courseId },
  },
}) => {
  useEffect(() => {
    getAllUsers();
    getThreadsOfForum(courseId);

    return () => resetThread();
  }, []);

  const currentUrl = useLocation().pathname;
  const { courseCode, courseTitle } = forum;

  if (threadLoading || userLoading) return null;

  return (
    <div
      className={cx({
        [appStyles.content_section]: true,
        [styles.container]: true,
      })}
    >
      <Link to={`${currentUrl}/new`}>
        <Button className={styles.button_ask} size="large">
          Ask Question
        </Button>
      </Link>
      <h1 className={appStyles.heading}>{courseCode} Discussions</h1>
      <p className={appStyles.subheading}>{courseTitle}</p>
      {threads.map((thread) => {
        return (
          <ThreadBox
            key={thread.id}
            courseCode={courseCode}
            {...getUserNameScoreById(allUsers, thread.creator)}
            {...thread}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  const forum = selectThreadsForumJS(state);
  const threads = selectThreadsJS(state);
  const allUsers = selectAllUsersJS(state);
  const threadLoading = selectThreadsLoadingJS(state);
  const userLoading = selectUserLoadingJS(state);
  return { forum, threads, allUsers, threadLoading, userLoading };
};

const mapDispatchToProps = {
  getThreadsOfForum: threadActions.getThreadsOfForum,
  getAllUsers: userActions.getAll,
  resetThread: threadActions.reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
