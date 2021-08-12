import React, { Component } from 'react';
import './App.css';
import Canvas from './Components/Canvas';
import Controller from './Components/Controller';
import Settings from './Components/Settings';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: '' };
  }

  callAPI() {
    fetch('http://localhost:9000/testAPI')
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App-body">
        <p className="App-intro">{this.state.apiResponse}</p>
        <h1>Canvas</h1>
        <Canvas />
        <Settings />
        <Controller />
      </div>
    );
  }
}

export default App;
