import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import styles from "./styles.scss";
import TextBox from "../TextBox";
import * as actions from "../../actions/user.action";
import { selectUserJS } from "../../selectors/user.selector";

const TopBar = ({ currentUser, logout }) => {
  const [keyword, setKeyword] = useState("");

  const history = useHistory();

  const onKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const onEnterPress = (e) => {
    if (e.key === "Enter" && keyword) {
      history.push(`/search?q=${keyword}`);
    }
  };

  const onLogoutClick = () => {
    logout();
    history.push("/login");
  };

  return (
    <div className={styles.topbar}>
      <div className={styles.content}>
        <h2>NTUConnect</h2>
        <TextBox
          className={styles.search_bar}
          placeholder="Search"
          value={keyword}
          onChange={onKeywordChange}
          onKeyDown={onEnterPress}
          fullwidth
        />
        <p>
          <Link
            to={{
              pathname: `/user/${currentUser.id}`,
            }}
          >
            <b>Profile</b>
          </Link>
        </p>
        <p onClick={onLogoutClick}>
          <Link to="/login">
            <b>Logout</b>
          </Link>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const currentUser = selectUserJS(state);
  return { currentUser };
};

const mapDispatchToProps = {
  logout: actions.logout,
};
export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
