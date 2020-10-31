import React from "react";
import { connect } from "react-redux";

import SideBarItem from "../SideBarItem";

import styles from "./styles.scss";

import { selectSidebarSelectedJS } from "../../selectors/sidebar.selector";

import * as sidebarActions from "../../actions/sidebar.action";

const SideBarMenu = ({ menu, selected, setSelected }) => {
  const onItemClick = (id) => {
    setSelected(id);
  };

  return (
    <div className={styles.sidebar_container}>
      {menu.map((m) => {
        return (
          <SideBarItem
            key={m.name}
            onClick={() => onItemClick(m.id)}
            active={m.id === selected}
            {...m}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  const selected = selectSidebarSelectedJS(state);
  return { selected };
};

const mapDispatchToProps = {
  setSelected: sidebarActions.setSelected,
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBarMenu);
