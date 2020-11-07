import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import SideBarMenu from "../../components/SideBarMenu";
import TopBar from "../../components/TopBar";
import HomePage from "./HomePage";
import ForumListPage from "./ForumListPage";
import AskQuestionPage from "./AskQuestionPage/AskQuestionPage";
import ForumPage from "./ForumPage";
import ThreadPage from "./ThreadPage";
import CreateForumPage from "./CreateForumPage/CreateForumPage";
import SearchPage from "./SearchPage";
import ProfilePage from "./ProfilePage/ProfilePage";

import styles from "./styles.scss";

import {
  selectAllForumsJoinedJS,
  selectForumsLoadingJS,
} from "../../selectors/forums.selector";
import { selectUserJS } from "../../selectors/user.selector";

import * as forumActions from "../../actions/forums.action";
import * as userActions from "../../actions/user.action";

const PageRoutes = ({
  match: { url },
  allForumsJoined,
  forumLoading,
  currentUser,
  getAllForums,
  resetForums,
}) => {
  useEffect(() => {
    getAllForums();

    return () => resetForums();
  }, []);

  const menu = [
    { name: "Home", id: "home", url: "/", level: 0 },
    {
      name: "Profile",
      id: "profile",
      url: `/user/${currentUser.id}`,
      level: 0,
    },
    { name: "Forums", id: "courses", url: "/courses", level: 0 },
    ...allForumsJoined.map((forum) => {
      return {
        name: forum.courseCode,
        id: `courses/${forum.id}`,
        url: `/courses/${forum.id}`,
        level: 1,
      };
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
            <Route path={`${url}search`} component={SearchPage} />
            <Route path={`${url}courses/new`} component={CreateForumPage} />
            <Route
              path={`${url}courses/:courseId/thread/:threadId`}
              component={ThreadPage}
            />
            <Route
              path={`${url}courses/:courseId/new`}
              component={AskQuestionPage}
            />
            <Route path={`${url}courses/:courseId`} component={ForumPage} />
            <Route path={`${url}courses`} component={ForumListPage} />
            <Route path={`${url}user/:id`} component={ProfilePage} />
            <Route path={url} component={HomePage} />
          </Switch>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const allForumsJoined = selectAllForumsJoinedJS(state);
  const forumLoading = selectForumsLoadingJS(state);
  const currentUser = selectUserJS(state);
  return { allForumsJoined, forumLoading, currentUser };
};

const mapDispatchToProps = {
  getAllForums: forumActions.getAll,
  resetForums: forumActions.reset,
  getCurrentUser: userActions.getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(PageRoutes);
