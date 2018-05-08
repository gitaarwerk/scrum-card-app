import React, { Component } from 'react';
import CardHolder from './components/CardHolder';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ margin: '20px' }}>
        <CardHolder numberOfCards={8} />
      </div>
    );
  }
}

export default App;
