import React from "react";
import cx from "classnames";

import styles from "./styles.scss";

const RoundedIcon = ({ className, size, text }) => {
  const classnames = cx(
    {
      [styles.rounded_icon]: true,
      [styles.small]: size === "small",
      [styles.medium]: size === "medium",
      [styles.large]: size === "large",
    },
    className
  );

  return <div className={classnames}>{text}</div>;
};

export default RoundedIcon;
