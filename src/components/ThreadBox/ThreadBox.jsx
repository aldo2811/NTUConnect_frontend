import React from "react";
import { Link } from "react-router-dom";

import UserBar from "../UserBar";
import InteractionBar from "../InteractionBar";
import CourseCodeIcon from "../InteractionBar/CourseCodeIcon/CourseCodeIcon";
import AnsweredIcon from "../InteractionBar/AnsweredIcon";

import appStyles from "../../stylesheets/app.scss";
import UnansweredIcon from "../InteractionBar/UnansweredIcon";

const ThreadBox = ({
  id,
  name,
  datePosted,
  title,
  courseCode,
  answered,
  votes,
  comments,
}) => {
  if (!id) return null;

  return (
    <div className={appStyles.box_container}>
      <UserBar name={name} datePosted={datePosted} />
      <Link to={`/thread/${id}`}>
        <h1>{title}</h1>
      </Link>
      <InteractionBar>
        <CourseCodeIcon courseCode={courseCode} />
        {answered && <AnsweredIcon />}
        {!answered && <UnansweredIcon />}
        <div>{votes} votes</div>
        <div>{comments} comments</div>
      </InteractionBar>
    </div>
  );
};

export default ThreadBox;
