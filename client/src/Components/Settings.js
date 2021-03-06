import React, { Component } from 'react';

const Settings = (props) => {
    return (
        <div className="settings">
            <label htmlFor="colorInput"> Color: </label>
            <input type="color" id="colorInput"></input>
            <label htmlFor="sizeInput"> Size: </label>
            <input type="range" id="sizeInput" min="1" max="20" defaultValue="5"></input>
        </div>
    );

}

export default Settings;
