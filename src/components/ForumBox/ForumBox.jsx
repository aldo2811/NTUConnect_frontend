import React from "react";
import cx from "classnames";

import InteractionBar from "../InteractionBar";

import styles from "./styles.scss";
import appStyles from "../../stylesheets/app.scss";
import Button from "../Button";

const ForumBox = ({
  id,
  courseTitle,
  courseCode,
  description,
  students,
  threads,
  joined,
}) => {
  if (!id) return null;

  return (
    <div
      className={cx({
        [appStyles.box_container]: true,
        [styles.container]: true,
      })}
    >
      {joined && (
        <Button className={styles.button_join} size="medium">
          Joined
        </Button>
      )}
      {!joined && (
        <Button className={styles.button_join} size="medium">
          Join
        </Button>
      )}
      <h2 className={styles.title}>
        {courseCode}: {courseTitle}
      </h2>
      <p>{description}</p>
      <InteractionBar>
        <p>{students} students</p>
        <p>{threads} threads</p>
      </InteractionBar>
    </div>
  );
};

export default ForumBox;
