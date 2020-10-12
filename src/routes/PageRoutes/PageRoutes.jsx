import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import SideBarMenu from "../../components/SideBarMenu";
import TopBar from "../../components/TopBar";
import Home from "./Home";

import styles from "./styles.scss";

const PageRoutes = () => {
  const menu = [{ name: "A" }, { name: "B" }];

  return (
    <>
      <TopBar />
      <div className={styles.container}>
        <SideBarMenu menu={menu} />
        <div className={styles.content}>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </Router>
        </div>
      </div>
    </>
  );
};

export default PageRoutes;
