import React, { Component } from "react";
import styled from "styled-components";

import AppBar from "./AppBar";
import CardCollectionContainer from "../containers/CardCollectionContainer";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // eslint-disable-next-line
    // global && global.screen && global.screen.orientation && global.screen.orientation.lock && global.screen.orientation.lock('portrait');
  }

  render() {
    return (
      <div
        className="App"
        style={{
          height: "100vh",
          width: "100vw",
          background: this.props.backgroundColor,
          overflowY: "auto"
        }}
      >
        <AppBar />
        <CardCollectionContainer />
      </div>
    );
  }
}

export default App;
