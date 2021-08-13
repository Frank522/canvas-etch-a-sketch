import React, { Component, useEffect, useState } from 'react';
import './App.css';
import Canvas from './Components/Canvas';
import Controller from './Components/Controller';
import Settings from './Components/Settings';
import DrawingHistory from './Modules/DrawingHistory';

const App = () => {

  const [apiResponse, setApiResponse] = useState('');

  const callAPI = () => {
    fetch('http://localhost:9000/testAPI')
      .then((res) => res.text())
      .then((res) => setApiResponse(res));
  }

  useEffect(() => {
    callAPI();
    
  }, [apiResponse]);

  return (
    <div className="App-body">
      <p className="App-intro">{apiResponse}</p>
      <h1>Canvas</h1>
      <Canvas />
      <Settings />
      <Controller />
    </div>
  );

}

export default App;
