import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";

import styles from "./styles.scss";

const SideBarItem = ({ name, url, level, onClick, className, active }) => {
  const levelStyle = {
    fontWeight: level === 0 ? "bold" : "normal",
    transform: `translateX(${level * 10}px)`,
  };

  const classnames = cx(
    {
      [styles.sidebar_item]: true,
      [styles.active]: active,
    },
    className
  );

  return (
    <Link to={url}>
      <div className={classnames} onClick={onClick}>
        <p style={levelStyle}>{name}</p>
      </div>
    </Link>
  );
};

export default SideBarItem;
