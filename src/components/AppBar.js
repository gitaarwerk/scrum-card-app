import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const AppBar = ({ onClickOpenSettings }) => (
  <IconButton onClick={onClickOpenSettings} aria-label="Settings menu">
    <MenuIcon />
  </IconButton>
);

AppBar.propTypes = {
  onClickOpenSettings: PropTypes.func.isRequired
};

export default AppBar;
