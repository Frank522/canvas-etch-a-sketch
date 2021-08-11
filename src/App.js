import React, { Component } from 'react';
import './App.css';
import Canvas from './Components/Canvas';
import Controller from './Components/Controller';
import Settings from './Components/Settings';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App-body">
        <h1>Canvas</h1>
        <Canvas />
        <Settings />
        <Controller />
      </div>
    );
  }
}


export default App;
