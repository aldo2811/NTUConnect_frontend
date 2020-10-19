import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import cx from "classnames";

import styles from "./styles.scss";
import TextBox from "../TextBox";
import * as actions from "../../actions/user.action";

const TopBar = ({ logout }) => {
  const history = useHistory();

  const onLogoutClick = () => {
    logout();
    history.push("/login");
  };

  return (
    <div className={styles.topbar}>
      <div className={styles.content}>
        <h2>NTUConnect</h2>
        <TextBox className={styles.search_bar} placeholder="Search" fullwidth />
        <p className={styles.text}>Profile</p>
        <p
          className={cx({ [styles.logout]: true, [styles.text]: true })}
          onClick={onLogoutClick}
        >
          Logout
        </p>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  logout: actions.logout,
};
export default connect(null, mapDispatchToProps)(TopBar);
