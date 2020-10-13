import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";

import styles from "./styles.scss";

const SideBarItem = ({ name, url, onClick, className, active }) => {
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
        {name}
      </div>
    </Link>
  );
};

export default SideBarItem;
