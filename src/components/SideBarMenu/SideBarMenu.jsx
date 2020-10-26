import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

import SideBarItem from "../SideBarItem";

import styles from "./styles.scss";

import {
  selectAllForumsJoinedJS,
  selectForumsLoadingJS,
} from "../../selectors/forums.selector";

import * as forumActions from "../../actions/forums.action";
import * as userActions from "../../actions/user.action";

const SideBarMenu = ({
  allForumsJoined,
  forumLoading,
  getAllForums,
  resetForums,
  getCurrentUser,
}) => {
  useEffect(() => {
    getCurrentUser();
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

  const currentUrl = useLocation().pathname;
  const urlInMenu = menu.find((m) => m.url === currentUrl);
  const parentPath = `/${currentUrl.split("/").slice(1, -1).join("/")}`;
  let currentMenu;

  if (urlInMenu) {
    currentMenu = currentUrl;
  } else if (menu.find((m) => m.url === parentPath)) {
    currentMenu = parentPath;
  } else {
    currentMenu = "/";
  }

  const [selected, setSelected] = useState(currentMenu);

  const onItemClick = (selectedUrl) => {
    setSelected(selectedUrl);
  };

  if (forumLoading) return null;

  return (
    <div className={styles.sidebar_container}>
      {menu.map((m) => {
        return (
          <SideBarItem
            key={m.name}
            name={m.name}
            url={m.url}
            level={m.level}
            onClick={() => onItemClick(m.url)}
            active={m.url === selected}
          />
        );
      })}
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SideBarMenu);
