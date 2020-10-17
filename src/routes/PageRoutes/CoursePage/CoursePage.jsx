import React, { useEffect } from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { useLocation, Link } from "react-router-dom";

import ThreadBox from "../../../components/ThreadBox";
import Button from "../../../components/Button";

import styles from "./styles.scss";
import appStyles from "../../../stylesheets/app.scss";
import {
  selectThreadsJS,
  selectThreadsErrorJS,
  selectThreadsForumJS,
} from "../../../selectors/threads.selector";
import * as action from "../../../actions/threads.action";

const CoursePage = ({
  forum,
  threads,
  getThreadsOfForum,
  match: {
    params: { courseId },
  },
}) => {
  useEffect(() => {
    getThreadsOfForum(courseId);
  }, []);

  const currentUrl = useLocation().pathname;

  const { courseCode, courseTitle } = forum;
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
      {threads.map((discussion) => {
        return (
          <ThreadBox
            key={discussion.id}
            courseCode={courseCode}
            {...discussion}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  const forum = selectThreadsForumJS(state);
  const threads = selectThreadsJS(state);
  const error = selectThreadsErrorJS(state);
  return { forum, threads, error };
};

const mapDispatchToProps = {
  getThreadsOfForum: action.getThreadsOfForum,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
