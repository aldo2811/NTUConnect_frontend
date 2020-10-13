import React from "react";
import { Switch, Route } from "react-router-dom";

import SideBarMenu from "../../components/SideBarMenu";
import TopBar from "../../components/TopBar";
import Home from "./Home";

import styles from "./styles.scss";
import CourseList from "./CourseList";

const PageRoutes = ({ match: { url } }) => {
  const menu = [
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
  ];

  return (
    <>
      <TopBar />
      <div className={styles.container}>
        <SideBarMenu menu={menu} currentUrl={url} />
        <div className={styles.content}>
          <Switch>
            <Route path={`${url}courses`} component={CourseList} />
            <Route path={url} component={Home} />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default PageRoutes;
