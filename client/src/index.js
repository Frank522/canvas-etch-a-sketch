import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import addSettings from './Modules/Settings-Controller';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

window.addEventListener('load', () => {

  //Resizing
  canvas.height = 500;
  canvas.width = 600;
  ctx.lineWidth = 5;

  let painting = false;

  function startPosition() {
    if (!painting) {
      ctx.beginPath();
      painting = true;
    }
  }

  function finishedPosition() {
    if (painting) {
      ctx.closePath();
      painting = false;
      console.log(ctx);
    }

  }

  function draw(e) {

    if (painting) {
      ctx.lineCap = 'round';
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
    }


  }

  //EventListeners
  canvas.addEventListener('mousedown', startPosition);
  canvas.addEventListener('mouseup', finishedPosition);
  canvas.addEventListener('mousemove', draw);

  addSettings(ctx);

  document.querySelector('#resetBtn').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  })
});