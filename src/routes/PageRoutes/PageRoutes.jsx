import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import SideBarMenu from "../../components/SideBarMenu";
import TopBar from "../../components/TopBar";
import Home from "./Home";

import styles from "./styles.scss";
import CourseList from "./CourseList";
import AskQuestionPage from "./AskQuestionPage/AskQuestionPage";
import CoursePage from "./CoursePage";
import Thread from "./Thread";
import CreateForumPage from "./CreateForumPage/CreateForumPage";
import {
  selectAllForumsJoinedJS,
  selectForumsLoadingJS,
} from "../../selectors/forums.selector";
import * as forumActions from "../../actions/forums.action";
import * as userActions from "../../actions/user.action";
import SearchPage from "./SearchPage";
import ProfilePage from "./ProfilePage/ProfilePage";

const PageRoutes = ({
  match: { url },
  allForumsJoined,
  forumLoading,
  getAllForums,
  resetForums,
}) => {
  useEffect(() => {
    getAllForums();

    return () => resetForums();
  }, []);

  const menu = [
    { name: "Home", url: "/", level: 0 },
    { name: "Courses", url: "/courses", level: 0 },
    ...allForumsJoined.map((forum) => {
      return { name: forum.courseCode, url: `/courses/${forum.id}`, level: 1 };
    }),
  ];

  if (forumLoading) return null;

  return (
    <>
      <TopBar />
      <div className={styles.container}>
        <SideBarMenu menu={menu} />
        <div className={styles.content}>
          <Switch>
            <Route path={`${url}thread/new`} component={AskQuestionPage} />
            <Route path={`${url}thread/:threadId`} component={Thread} />
            <Route path={`${url}search`} component={SearchPage} />
            <Route path={`${url}courses/new`} component={CreateForumPage} />
            <Route
              path={`${url}courses/:courseId/new`}
              component={AskQuestionPage}
            />
            <Route path={`${url}courses/:courseId`} component={CoursePage} />
            <Route path={`${url}courses`} component={CourseList} />
            <Route path={`${url}user/:id`} component={ProfilePage} />
            <Route path={url} component={Home} />
          </Switch>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const allForumsJoined = selectAllForumsJoinedJS(state);
  const forumLoading = selectForumsLoadingJS(state);
  return { allForumsJoined, forumLoading };
};

const mapDispatchToProps = {
  getAllForums: forumActions.getAll,
  resetForums: forumActions.reset,
  getCurrentUser: userActions.getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(PageRoutes);
