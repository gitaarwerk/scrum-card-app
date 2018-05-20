import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as actions from "../actionCreators";
import AppBar from "../components/AppBar";

function mergeProps(stateProps, dispatchProps) {
  const { toggleSettings } = dispatchProps;

  return {
    onClickToggleSettings: toggleSettings
  };
}

export default connect({}, actions)(AppBar);
