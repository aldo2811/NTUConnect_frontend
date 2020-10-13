import React from "react";
import cx from "classnames";

import styles from "./styles.scss";

const RoundedIcon = ({ className, text }) => {
  return (
    <div>
      <div className={cx({ [styles.rounded_icon]: true }, className)}>
        {text}
      </div>
    </div>
  );
};

export default RoundedIcon;
