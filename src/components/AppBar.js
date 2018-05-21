import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const AppBar = ({ toggleSettings }) => (
  <IconButton
    onClick={toggleSettings}
    aria-label="Settings menu"
    style={{ color: "white", position: "fixed", right: 0, top: 0 }}
  >
    <MenuIcon />
  </IconButton>
);

// AppBar.propTypes = {
//   onClickToggleSettings: PropTypes.any.isRequired
// };

export default AppBar;
