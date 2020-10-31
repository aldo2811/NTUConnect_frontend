import React from "react";
import cx from "classnames";

import styles from "./styles.scss";

const Tab = ({ childId, selected, onTabChange }) => {
  return (
    <li
      key={childId}
      className={cx({
        [styles.tab]: true,
        [styles.tab_active]: childId === selected,
      })}
      onClick={() => onTabChange(childId)}
    >
      <div className={styles.overlay} />
      {childId}
    </li>
  );
};

export default Tab;
