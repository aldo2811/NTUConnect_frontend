import React, { useState } from "react";
import SideBarItem from "../SideBarItem";

import styles from "./styles.scss";

const SideBarMenu = ({ menu }) => {
  const [selected, setSelected] = useState(0);

  const onItemClick = (index) => {
    setSelected(index);
  };

  return (
    <div className={styles.sidebar_container}>
      {menu.map((m, index) => {
        return (
          <SideBarItem
            key={m.name}
            name={m.name}
            onClick={() => onItemClick(index)}
            active={selected === index}
          />
        );
      })}
    </div>
  );
};

export default SideBarMenu;
