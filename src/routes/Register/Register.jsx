import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import TextBox from "../../components/TextBox";
import Button from "../../components/Button";

import {
  selectUserAccessTokenJS,
  selectUserLoadingJS,
} from "../../selectors/user.selector";

import * as actions from "../../actions/user.action";

import styles from "../Login/styles.scss";

const Register = ({
  accessToken,
  loading,
  register,
  reset,
  verifyAccess,
  cancelLoading,
}) => {
  useEffect(() => {
    verifyAccess();
    reset();
    cancelLoading();
  }, []);

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

  const handleSubmit = () => {
    if (!loading) register(username, email, password1, password2);
  };

  const onEnterPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  if (accessToken) {
    return <Redirect to="/" push />;
  }

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
          onKeyDown={onEnterPress}
        />
        <TextBox
          className={styles.textbox}
          fullwidth
          type="email"
          value={email}
          placeholder="Email"
          onChange={onEmailChange}
          onKeyDown={onEnterPress}
        />
        <TextBox
          className={styles.textbox}
          fullwidth
          type="password"
          value={password1}
          placeholder="Password"
          onChange={onPassword1Change}
          onKeyDown={onEnterPress}
        />
        <TextBox
          className={styles.textbox}
          fullwidth
          type="password"
          value={password2}
          placeholder="Retype Password"
          onChange={onPassword2Change}
          onKeyDown={onEnterPress}
        />
        <Button
          className={styles.button_submit}
          size="large"
          onClick={handleSubmit}
        >
          Register
        </Button>
        <Link to="/login">
          <p>Login to an existing account instead</p>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const accessToken = selectUserAccessTokenJS(state);
  const loading = selectUserLoadingJS(state);
  return {
    accessToken,
    loading,
  };
};

const mapDispatchToProps = {
  verifyAccess: actions.verifyAccess,
  register: actions.register,
  reset: actions.reset,
  cancelLoading: actions.cancelLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
