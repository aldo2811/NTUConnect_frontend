import React from "react";
import { Link } from "react-router-dom";

import UserBar from "../UserBar";
import InteractionBar from "../InteractionBar";
import CourseCodeIcon from "../InteractionBar/CourseCodeIcon/CourseCodeIcon";
import AnsweredIcon from "../InteractionBar/AnsweredIcon";

import appStyles from "../../stylesheets/app.scss";
import UnansweredIcon from "../InteractionBar/UnansweredIcon";

const ThreadBox = ({ id, creator, datePosted, title, forum, solved }) => {
  if (!id) return null;

  return (
    <div className={appStyles.box_container}>
      <UserBar datePosted={datePosted} {...creator} />
      <h1>
        <Link to={`/courses/${forum.id}/thread/${id}`}>{title}</Link>
      </h1>
      <InteractionBar>
        <CourseCodeIcon courseCode={forum.courseCode} />
        {solved && <AnsweredIcon />}
        {!solved && <UnansweredIcon />}
      </InteractionBar>
    </div>
  );
};

export default ThreadBox;
