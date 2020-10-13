import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import SideBarItem from "../SideBarItem";

import styles from "./styles.scss";

const SideBarMenu = ({ menu }) => {
  const currentUrl = useLocation();
  const parentPath = `/${currentUrl.pathname.split("/")[1]}`;
  const [selected, setSelected] = useState(parentPath);

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

export default SideBarMenu;
