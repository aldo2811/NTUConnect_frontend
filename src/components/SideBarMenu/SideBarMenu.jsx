import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import SideBarItem from "../SideBarItem";

import styles from "./styles.scss";

const SideBarMenu = ({ menu }) => {
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

  return (
    <div className={styles.sidebar_container}>
      {menu.map((m) => {
        return (
          <SideBarItem
            key={m.name}
            onClick={() => onItemClick(m.url)}
            active={m.url === selected}
            {...m}
          />
        );
      })}
    </div>
  );
};

export default SideBarMenu;
