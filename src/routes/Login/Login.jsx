import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import TextBox from "../../components/TextBox";
import Button from "../../components/Button";

import {
  selectUser,
  selectUserError,
  selectUserToken,
} from "../../selectors/user.selector";

import * as actions from "../../actions/user.action";

import styles from "./styles.scss";

const Login = ({ submit }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && email && password) {
      submit(username, email, password);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.login_box}>
        <h1 className={styles.title}>Login</h1>
        <TextBox
          className={styles.textbox}
          fullwidth
          type="text"
          value={username}
          placeholder="Username"
          onChange={onUsernameChange}
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
        <Button
          className={styles.button_submit}
          size="large"
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <Link to="/register">
          <p>Register for an account instead</p>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const user = selectUser(state);
  const token = selectUserToken(state);
  const error = selectUserError(state);
  return {
    user,
    token,
    error,
  };
};

const mapDispatchToProps = {
  submit: actions.submit,
  reset: actions.reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
