import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

import SideBarItem from "../SideBarItem";

import styles from "./styles.scss";

import { selectAllForumsJoinedJS } from "../../selectors/forums.selector";

import * as forumActions from "../../actions/forums.action";

const SideBarMenu = ({ allForumsJoined, getAllForums }) => {
  const menu = [
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    ...allForumsJoined.map((forum) => {
      return { name: forum.courseCode, url: `/courses/${forum.id}` };
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

  useEffect(() => {
    if (!allForumsJoined) getAllForums();
  }, []);

  const [selected, setSelected] = useState(currentMenu);

  const onItemClick = (selectedUrl) => {
    setSelected(selectedUrl);
  };

  return (
    <div className={styles.sidebar_container}>
      {menu.map((m) => {
        return (
          <SideBarItem
            key={m.name}
            name={m.name}
            url={m.url}
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
  return { allForumsJoined };
};

const mapDispatchToProps = {
  getAllForums: forumActions.getAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBarMenu);
