import React from "react";
import Tab from "../Tab";

import styles from "./styles.scss";

const Tabs = ({ selected, onTabChange, children }) => {
  return (
    <>
      <ul className={styles.tabs}>
        {children.map((child) => {
          const childId = child.props.id;
          return (
            <Tab
              key={childId}
              selected={selected}
              childId={childId}
              onTabChange={onTabChange}
            />
          );
        })}
      </ul>
      {children.find((child) => child.props.id === selected)}
    </>
  );
};

export default Tabs;
