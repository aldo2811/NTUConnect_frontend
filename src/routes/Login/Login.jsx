import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import TextBox from "../../components/TextBox";
import Button from "../../components/Button";

import {
  selectUserJS,
  selectUserErrorJS,
  selectUserAccessTokenJS,
} from "../../selectors/user.selector";

import * as actions from "../../actions/user.action";

import styles from "./styles.scss";

const Login = ({ accessToken, login, reset, verifyAccess }) => {
  useEffect(() => {
    reset();
    verifyAccess();
  }, []);

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
      login(username, email, password);
    }
  };

  if (accessToken) {
    return <Redirect to="/" push />;
  }

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
  const user = selectUserJS(state);
  const accessToken = selectUserAccessTokenJS(state);
  const error = selectUserErrorJS(state);
  return {
    user,
    accessToken,
    error,
  };
};

const mapDispatchToProps = {
  verifyAccess: actions.verifyAccess,
  login: actions.login,
  reset: actions.reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
