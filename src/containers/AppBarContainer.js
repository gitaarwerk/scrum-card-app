import { connect } from "react-redux";

import * as actions from "../actionCreators";
import AppBar from "../components/AppBar";

function mergeProps(stateProps, dispatchProps) {
  const { toggleSettings } = dispatchProps;

  return {
    toggleSettings
  };
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, actions)(AppBar);
