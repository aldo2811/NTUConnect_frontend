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

import * as threadActions from "../../../actions/threads.action";
import * as sidebarActions from "../../../actions/sidebar.action";

const CoursePage = ({
  forum,
  threads,
  threadLoading,
  getThreadsOfForum,
  resetThread,
  setSidebar,
  match: {
    params: { courseId },
  },
}) => {
  useEffect(() => {
    getThreadsOfForum(courseId);
    setSidebar(`courses/${courseId}`);

    return () => resetThread();
  }, [courseId]);

  const currentUrl = useLocation().pathname;
  const { courseCode, courseTitle } = forum;

  if (threadLoading) return null;

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
        return <ThreadBox key={thread.id} {...thread} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  const forum = selectThreadsForumJS(state);
  const threads = selectThreadsJS(state);
  const threadLoading = selectThreadsLoadingJS(state);
  return { forum, threads, threadLoading };
};

const mapDispatchToProps = {
  getThreadsOfForum: threadActions.getThreadsOfForum,
  resetThread: threadActions.reset,
  setSidebar: sidebarActions.setSelected,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
