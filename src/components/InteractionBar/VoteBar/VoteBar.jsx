import React, { useState } from "react";

import styles from "./styles.scss";

import upvoteInactive from "../../../../assets/upvote_inactive.png";
import downvoteActive from "../../../../assets/downvote_active.png";
import downvoteInactive from "../../../../assets/downvote_inactive.png";
import upvoteActive from "../../../../assets/upvote_active.png";

const VoteBar = ({ id, upvote, userVote, onVote }) => {
  const [currentUserVote, setCurrentUserVote] = useState(userVote);

  const otherVotes = upvote - userVote;

  const onVoteClick = (prev, next) => {
    let action;
    if (prev === next) {
      setCurrentUserVote(0);
      action = prev * -1;
    } else {
      setCurrentUserVote(next);
      if (prev === 0) action = next;
      else action = next * 2;
    }
    onVote(action, id);
  };

  return (
    <div className={styles.vote_bar}>
      <div
        className={styles.vote_button}
        onClick={() => onVoteClick(currentUserVote, 1)}
      >
        <img
          src={currentUserVote === 1 ? upvoteActive : upvoteInactive}
          alt="upvote"
        />
      </div>
      <div className={styles.vote_text}>{otherVotes + currentUserVote}</div>
      <div
        className={styles.vote_button}
        onClick={() => onVoteClick(currentUserVote, -1)}
      >
        <img
          src={currentUserVote === -1 ? downvoteActive : downvoteInactive}
          alt="downvote"
        />
      </div>
    </div>
  );
};

export default VoteBar;
