import { connect } from "react-redux";

import App from "../components/App";

function mergeProps(stateProps) {
  const { backgroundColor } = stateProps;

  return {
    backgroundColor
  };
}
const mapStateToProps = state => ({
  backgroundColor: state.backgroundColor
});

export default connect(mapStateToProps, {})(App);
