import React, { useState } from "react";
import { Link } from "react-router-dom";

import TextBox from "../../components/TextBox";
import Button from "../../components/Button";

import styles from "../Login/styles.scss";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.login_box}>
        <h1 className={styles.title}>Register</h1>
        <TextBox
          className={styles.textbox}
          fullwidth
          type="text"
          value={name}
          placeholder="Name"
          onChange={onNameChange}
        />
        <TextBox
          className={styles.textbox}
          fullwidth
          type="email"
          value={email}
          placeholder="Email"
          onChange={onEmailChange}
        />
        <TextBox
          className={styles.textbox}
          fullwidth
          type="password"
          value={password}
          placeholder="Password"
          onChange={onPasswordChange}
        />
        <Button className={styles.button_submit} size="large">
          Submit
        </Button>
        <Link to="/login">
          <p>Login to an existing account instead</p>
        </Link>
      </div>
    </div>
  );
};

export default Register;
