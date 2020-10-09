import React from "react";
import cx from "classnames";

import styles from "./styles.scss";
import interactionStyles from "../styles.scss";

const UnansweredIcon = () => {
  return (
    <div>
      <div
        className={cx({
          [styles.unanswered_icon]: true,
          [interactionStyles.rounded_icon]: true,
        })}
      >
        Unanswered
      </div>
    </div>
  );
};

export default UnansweredIcon;
