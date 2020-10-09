import React from "react";

import appStyles from "../../stylesheets/app.scss";
import InteractionBar from "../InteractionBar";

const ForumBox = ({ id, title, content, students, threads }) => {
  if (!id) return null;

  return (
    <div className={appStyles.box_container}>
      <h1>{title}</h1>
      <p>{content}</p>
      <InteractionBar>
        <p>{students} students</p>
        <p>{threads} threads</p>
      </InteractionBar>
    </div>
  );
};

export default ForumBox;
