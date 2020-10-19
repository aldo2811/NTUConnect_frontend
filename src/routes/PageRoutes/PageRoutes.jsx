import React from "react";
import { Switch, Route } from "react-router-dom";

import SideBarMenu from "../../components/SideBarMenu";
import TopBar from "../../components/TopBar";
import Home from "./Home";

import styles from "./styles.scss";
import CourseList from "./CourseList";
import AskQuestionPage from "./AskQuestionPage/AskQuestionPage";
import CoursePage from "./CoursePage";
import WithAuth from "../RedirectHOC/withAuth";
import Thread from "./Thread";
import CreateForumPage from "./CreateForumPage/CreateForumPage";

const PageRoutes = ({ match: { url } }) => {
  const AuthSideBarMenu = WithAuth(SideBarMenu);
  return (
    <>
      <TopBar />
      <div className={styles.container}>
        <AuthSideBarMenu />
        <div className={styles.content}>
          <Switch>
            <Route
              path={`${url}thread/new`}
              component={WithAuth(AskQuestionPage)}
            />
            <Route
              path={`${url}thread/:threadId`}
              component={WithAuth(Thread)}
            />
            <Route
              path={`${url}courses/new`}
              component={WithAuth(CreateForumPage)}
            />
            <Route
              path={`${url}courses/:courseId/new`}
              component={WithAuth(AskQuestionPage)}
            />
            <Route
              path={`${url}courses/:courseId`}
              component={WithAuth(CoursePage)}
            />
            <Route path={`${url}courses`} component={WithAuth(CourseList)} />
            <Route path={url} component={WithAuth(Home)} />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default PageRoutes;
