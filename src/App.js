import React, { Component } from 'react';
import './App.css';
import Canvas from './canvas';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App-body">
        <h1>Canvas</h1>
        <Canvas/>
      </div>
    );
  }
}


export default App;
