import React, { Component } from "react";

import CardCollectionContainer from "../containers/CardCollectionContainer";
import SettingsPaneContainer from "../containers/SettingsPaneContainer";
import AppBarContainer from "../containers/AppBarContainer";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // eslint-disable-next-line
    try {
      global &&
        global.screen &&
        global.screen.orientation &&
        global.screen.orientation.lock &&
        global.screen.orientation.lock("portrait");
    } catch (e) {}
  }

  render() {
    return (
      <div
        className="App"
        style={{
          height: "100vh",
          width: "100vw",
          paddingTop: "48px",
          background: this.props.backgroundColor,
          overflowY: "auto"
        }}
      >
        <AppBarContainer />
        <CardCollectionContainer />
        <SettingsPaneContainer />
      </div>
    );
  }
}

export default App;
