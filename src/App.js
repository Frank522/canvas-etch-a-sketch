import React, { Component } from 'react';
import './App.css';
import Canvas from './Components/Canvas';
import Settings from './Components/Settings';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App-body">
        <h1>Canvas</h1>
        <Canvas/>
        <Settings/>
      </div>
    );
  }
}


export default App;
