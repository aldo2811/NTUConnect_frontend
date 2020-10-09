import React from "react";
import cx from "classnames";

import styles from "./styles.scss";
import interactionStyles from "../styles.scss";

const AnsweredIcon = () => {
  return (
    <div>
      <div
        className={cx({
          [styles.answered_icon]: true,
          [interactionStyles.rounded_icon]: true,
        })}
      >
        Answered
      </div>
    </div>
  );
};

export default AnsweredIcon;
