import React, { Component } from 'react';

class Settings extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="settings">
        <label for="colorInput">Color</label>
        <input type="color" id="colorInput"></input>
        <label for="sizeInput">Size</label>
        <input type="range" id="sizeInput" min="1" max="50"></input>
      </div>
    );
  }
}

export default Settings;
