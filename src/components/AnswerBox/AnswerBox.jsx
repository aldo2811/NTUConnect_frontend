import React from "react";
import cx from "classnames";

import UserBar from "../UserBar";
import InteractionBar from "../InteractionBar";
import VoteBar from "../InteractionBar/VoteBar";
import RoundedIcon from "../RoundedIcon";

import styles from "./styles.scss";
import appStyles from "../../stylesheets/app.scss";

const AnswerBox = ({
  id,
  username,
  datePosted,
  content,
  upvote,
  isCorrect,
  userVote,
}) => {
  if (!id) return null;

  return (
    <div
      className={cx({
        [styles.container]: true,
        [appStyles.box_container]: true,
      })}
    >
      {isCorrect && (
        <div className={styles.verified_container}>
          <RoundedIcon
            className={styles.verified_icon}
            text="Verified Answer"
          />
        </div>
      )}

      <UserBar username={username} datePosted={datePosted} />
      <p>{content}</p>
      <InteractionBar>
        <VoteBar upvote={upvote} userVote={userVote} />
      </InteractionBar>
    </div>
  );
};

export default AnswerBox;
