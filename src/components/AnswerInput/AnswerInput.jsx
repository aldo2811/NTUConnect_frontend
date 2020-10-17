import React, { useState } from "react";

import styles from "./styles.scss";
import appStyles from "../../stylesheets/app.scss";
import Button from "../Button";
import TextBox from "../TextBox";

const AnswerInput = ({ onSubmitClick }) => {
  const [answer, setAnswer] = useState("");

  const onAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();
    onSubmitClick(answer);
    setAnswer("");
  };

  return (
    <div className={appStyles.box_container}>
      <h2>Your Answer</h2>
      <TextBox value={answer} onChange={onAnswerChange} fullwidth multiline />
      <Button className={styles.submit_button} size="large" onClick={onClick}>
        Submit
      </Button>
    </div>
  );
};

export default AnswerInput;
