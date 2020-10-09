import React from "react";
import cx from "classnames";

import styles from "./styles.scss";
import interactionStyles from "../styles.scss";

const CourseCodeIcon = ({ courseCode }) => {
  return (
    <div>
      <div
        className={cx({
          [styles.coursecode_icon]: true,
          [interactionStyles.rounded_icon]: true,
        })}
      >
        {courseCode}
      </div>
    </div>
  );
};

export default CourseCodeIcon;
