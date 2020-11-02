import React from "react";
import cx from "classnames";

import appStyles from "../../stylesheets/app.scss";
import styles from "./styles.scss";
import RoundedIcon from "../RoundedIcon";

import avatar from "../../../assets/avatar.png";

const ProfileBox = ({ username, score, type }) => {
  const userType = type === "IN" ? "Instructor" : "Student";
  return (
    <div
      className={cx({
        [appStyles.box_container]: true,
        [styles.container]: true,
      })}
    >
      <img className={styles.avatar} src={avatar} alt="avatar" />
      <div className={styles.details}>
        <h1>{username}</h1>
        <h1 className={styles.score}>{score} points</h1>
      </div>
      <div className={styles.type_container}>
        <RoundedIcon className={styles.type_icon} text={userType} />
      </div>
    </div>
  );
};

export default ProfileBox;
