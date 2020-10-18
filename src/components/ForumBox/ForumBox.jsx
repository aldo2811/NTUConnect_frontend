import React from "react";
import cx from "classnames";
import { Link, useLocation } from "react-router-dom";

import InteractionBar from "../InteractionBar";
import Button from "../Button";

import styles from "./styles.scss";
import appStyles from "../../stylesheets/app.scss";
import RoundedIcon from "../RoundedIcon";

const ForumBox = ({
  id,
  courseTitle,
  courseCode,
  description,
  students,
  threads,
  isJoined,
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
      {isJoined && (
        <RoundedIcon
          className={cx({
            [styles.icon_joined]: true,
            [styles.join]: true,
          })}
          size="large"
          text="Joined"
        />
      )}
      {!isJoined && (
        <Button
          className={cx({
            [styles.button_join]: true,
            [styles.join]: true,
          })}
          size="large"
        >
          Join
        </Button>
      )}
      <h2 className={styles.title}>
        {isJoined && (
          <Link to={`${currentUrl}/${id}`}>
            {courseCode}: {courseTitle}
          </Link>
        )}
        {!isJoined && `${courseCode}: ${courseTitle}`}
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
