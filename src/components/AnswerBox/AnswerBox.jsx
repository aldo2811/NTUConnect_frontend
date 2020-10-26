import React from "react";
import cx from "classnames";

import UserBar from "../UserBar";
import InteractionBar from "../InteractionBar";
import VoteBar from "../InteractionBar/VoteBar";
import RoundedIcon from "../RoundedIcon";

import styles from "./styles.scss";
import appStyles from "../../stylesheets/app.scss";
import Button from "../Button";

const AnswerBox = ({
  id,
  creator: { username, score },
  datePosted,
  content,
  upvote,
  isCorrect,
  status,
  onVote,
  userType,
  onMarkSolved,
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

      {!isCorrect && userType === "IN" && (
        <div className={styles.verified_container}>
          <Button onClick={() => onMarkSolved(true, id)}>Mark as Answer</Button>
        </div>
      )}

      <UserBar username={username} score={score} datePosted={datePosted} />
      <p>{content}</p>
      <InteractionBar>
        <VoteBar
          id={id}
          upvote={upvote}
          userVote={status[0].value}
          onVote={onVote}
        />
      </InteractionBar>
    </div>
  );
};

export default AnswerBox;
