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
  username,
  score,
  datePosted,
  title,
  courseCode,
  solved,
}) => {
  if (!id) return null;

  return (
    <div className={appStyles.box_container}>
      <UserBar username={username} score={score} datePosted={datePosted} />
      <h1>
        <Link to={`/thread/${id}`}>{title}</Link>
      </h1>
      <InteractionBar>
        <CourseCodeIcon courseCode={courseCode} />
        {solved && <AnsweredIcon />}
        {!solved && <UnansweredIcon />}
      </InteractionBar>
    </div>
  );
};

export default ThreadBox;
