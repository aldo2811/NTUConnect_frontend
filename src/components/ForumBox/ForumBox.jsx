import React from "react";
import cx from "classnames";
import { Link, useLocation } from "react-router-dom";

import Button from "../Button";

import styles from "./styles.scss";
import appStyles from "../../stylesheets/app.scss";
import RoundedIcon from "../RoundedIcon";

const ForumBox = ({
  id,
  courseTitle,
  courseCode,
  username,
  userType,
  isJoined,
  onJoinClick,
}) => {
  const currentUrl = useLocation().pathname;

  const onClick = (e) => {
    e.preventDefault();
    onJoinClick(id);
  };

  if (!id) return null;

  return (
    <div
      className={cx({
        [appStyles.box_container]: true,
        [styles.container]: true,
      })}
    >
      {userType === "ST" && isJoined && (
        <RoundedIcon
          className={cx({
            [styles.icon_joined]: true,
            [styles.join]: true,
          })}
          size="large"
          text="Joined"
        />
      )}
      {userType === "ST" && !isJoined && (
        <Button
          className={cx({
            [styles.button_join]: true,
            [styles.join]: true,
          })}
          size="large"
          onClick={onClick}
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
      <p>Course Instructor: {username}</p>
    </div>
  );
};

export default ForumBox;
