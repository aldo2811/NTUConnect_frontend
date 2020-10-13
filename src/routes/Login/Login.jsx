import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./styles.scss";
import TextBox from "../../components/TextBox";
import Button from "../../components/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.login_box}>
        <h1 className={styles.title}>Login</h1>
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
        <Link to="/register">
          <p>Register for an account instead</p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
