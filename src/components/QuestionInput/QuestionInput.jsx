import React, { useState } from "react";
import TextBox from "../TextBox";
import Button from "../Button";

import appStyles from "../../stylesheets/app.scss";
import styles from "../AnswerInput/styles.scss";

const QuestionInput = ({ onSubmitClick }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();
    onSubmitClick(title, description);
  };

  return (
    <div className={appStyles.box_container}>
      <b>Title</b>
      <TextBox value={title} onChange={onTitleChange} fullwidth />
      <b>Body</b>
      <TextBox
        value={description}
        onChange={onDescriptionChange}
        fullwidth
        multiline
      />
      <Button className={styles.submit_button} size="large" onClick={onClick}>
        Submit
      </Button>
    </div>
  );
};

export default QuestionInput;
