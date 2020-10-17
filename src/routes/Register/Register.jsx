import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import TextBox from "../../components/TextBox";
import Button from "../../components/Button";

import {
  selectUser,
  selectUserError,
  selectUserAccessToken,
} from "../../selectors/user.selector";

import * as actions from "../../actions/user.action";

import styles from "../Login/styles.scss";

const Register = ({ register }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPassword1Change = (e) => {
    setPassword1(e.target.value);
  };

  const onPassword2Change = (e) => {
    setPassword2(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(username, email, password1, password2);
  };

  return (
    <div className={styles.container}>
      <div className={styles.login_box}>
        <h1 className={styles.title}>Register</h1>
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
          value={password1}
          placeholder="Password"
          onChange={onPassword1Change}
        />
        <TextBox
          className={styles.textbox}
          fullwidth
          type="password"
          value={password2}
          placeholder="Retype Password"
          onChange={onPassword2Change}
        />
        <Button
          className={styles.button_submit}
          size="large"
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <Link to="/login">
          <p>Login to an existing account instead</p>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const user = selectUser(state);
  const token = selectUserAccessToken(state);
  const error = selectUserError(state);

  return {
    user,
    token,
    error,
  };
};

const mapDispatchToProps = {
  register: actions.register,
  reset: actions.reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
