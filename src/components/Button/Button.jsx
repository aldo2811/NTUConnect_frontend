import React from "react";
import cx from "classnames";

import styles from "./styles.scss";

const Button = ({ className, children, size, ...rest }) => {
  const classnames = cx(
    {
      [styles.button]: true,
      [styles.small]: size === "small",
      [styles.medium]: size === "medium",
      [styles.large]: size === "large",
    },
    className
  );

  return (
    <button type="button" className={classnames} {...rest}>
      {children}
    </button>
  );
};

export default Button;
