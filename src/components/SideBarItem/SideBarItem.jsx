import React from "react";
import cx from "classnames";

import styles from "./styles.scss";

const SideBarItem = ({ name, onClick, className, active }) => {
  const classnames = cx(
    {
      [styles.sidebar_item]: true,
      [styles.active]: active,
    },
    className
  );

  return (
    <div className={classnames} onClick={onClick}>
      {name}
    </div>
  );
};

export default SideBarItem;
