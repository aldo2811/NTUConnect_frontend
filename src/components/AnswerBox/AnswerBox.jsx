import React, { useState, Fragment } from "react";
import cx from "classnames";

import UserBar from "../UserBar";
import InteractionBar from "../InteractionBar";
import VoteBar from "../InteractionBar/VoteBar";
import RoundedIcon from "../RoundedIcon";
import Button from "../Button";
import ReplyInput from "../ReplyInput";
import ReplyBox from "../ReplyBox";

import styles from "./styles.scss";
import appStyles from "../../stylesheets/app.scss";

const AnswerBox = ({
  id,
  creator,
  datePosted,
  content,
  upvote,
  isCorrect,
  status,
  replies,
  onVote,
  userType,
  solved,
  onMarkSolved,
  onReplySubmit,
}) => {
  if (!id) return null;

  const [replyInputToggle, setReplyInputToggle] = useState(false);
  const [showRepliesToggle, setShowRepliesToggle] = useState(false);

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

      {!solved && !isCorrect && userType === "IN" && (
        <div className={styles.verified_container}>
          <Button onClick={() => onMarkSolved(true, id)}>Mark as Answer</Button>
        </div>
      )}

      <UserBar datePosted={datePosted} {...creator} />
      <p>
        {content &&
          content.split("\n").map((item, key) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <Fragment key={key}>
                {item}
                <br />
              </Fragment>
            );
          })}
      </p>
      <InteractionBar>
        <VoteBar
          id={id}
          upvote={upvote}
          userVote={status[0].value}
          onVote={onVote}
        />
        {replies.length > 0 && (
          <p
            className={styles.reply_toggle}
            onClick={() => setShowRepliesToggle(!showRepliesToggle)}
          >
            {showRepliesToggle ? "Hide Replies" : "Show Replies"}
          </p>
        )}

        <p
          className={styles.reply_toggle}
          onClick={() => setReplyInputToggle(!replyInputToggle)}
        >
          {replyInputToggle ? "Close Reply Input" : "Add a Reply"}
        </p>
      </InteractionBar>
      {replyInputToggle && (
        <ReplyInput
          className={styles.reply_input}
          onSubmitClick={onReplySubmit}
        />
      )}
      {replies.length > 0 && showRepliesToggle && (
        <div className={styles.replies_container}>
          {replies.map((reply) => {
            return (
              <ReplyBox
                key={reply.id}
                onVote={onVote}
                onMarkSolved={onMarkSolved}
                userType={userType}
                {...reply}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AnswerBox;
