import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import RoundedIcon from "../RoundedIcon";

import styles from "./styles.scss";
import appStyles from "../../stylesheets/app.scss";
import { parseDate } from "../../utils/helper";

const ProfileAnswerBox = ({
  id,
  datePosted,
  thread,
  content,
  upvote,
  isCorrect,
}) => {
  if (!id) return null;

  return (
    <div className={styles.container}>
      <Link to={`/courses/${thread.forum}/thread/${thread.id}`}>
        <div className={appStyles.box_container}>
          {isCorrect && (
            <div className={styles.verified_container}>
              <RoundedIcon
                className={styles.verified_icon}
                text="Verified Answer"
              />
            </div>
          )}
          <div>
            <p>
              <b>{thread.title}</b>
            </p>
            <p className={styles.details}>
              {upvote} votes • posted on {parseDate(datePosted)}
            </p>
            <p className={styles.details}>
              {content.split("\n").map((item, key) => {
                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <Fragment key={key}>
                    {item}
                    <br />
                  </Fragment>
                );
              })}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProfileAnswerBox;
