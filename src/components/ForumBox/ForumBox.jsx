import React from "react";
import cx from "classnames";
import { Link, useLocation } from "react-router-dom";

import InteractionBar from "../InteractionBar";
import Button from "../Button";

import styles from "./styles.scss";
import appStyles from "../../stylesheets/app.scss";

const ForumBox = ({
  id,
  courseTitle,
  courseCode,
  description,
  students,
  threads,
  joined,
}) => {
  const currentUrl = useLocation().pathname;
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
        <Link to={`${currentUrl}/${id}`}>
          {courseCode}: {courseTitle}
        </Link>
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
