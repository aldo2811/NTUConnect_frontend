import React, { useState } from "react";

import Button from "../Button";
import TextBox from "../TextBox";

import styles from "./styles.scss";

const ReplyInput = ({ onSubmitClick, className }) => {
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
    <div>
      <TextBox
        className={className}
        value={answer}
        onChange={onAnswerChange}
        fullwidth
        multiline
      />
      <Button className={styles.submit_button} size="large" onClick={onClick}>
        Submit
      </Button>
    </div>
  );
};

export default ReplyInput;
