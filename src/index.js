import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

window.addEventListener('load', () => {

  //Resizing
  canvas.height = window.innerHeight / 2;
  canvas.width = (window.innerWidth * 2) / 3;

  // ctx.strokeStyle = 'red';
  // ctx.lineWidth = 5;
  // ctx.strokeRect(50, 50, 200, 200);

  // ctx.beginPath();
  // ctx.moveTo(100, 100);
  // ctx.lineTo(200, 200);
  // ctx.moveTo(100, 200);
  // ctx.lineTo(200, 100);
  // ctx.closePath();
  // ctx.stroke();

  let painting = false;

  function startPosition() {
    ctx.beginPath();
    painting = true;
  }

  function finishedPosition() {
    ctx.closePath();
    painting = false;
    console.log(ctx);
  }

  function draw(e) {
    
    if(!painting) return;

    console.log(e);

    ctx.lineWidth = 10;
    ctx.lineCap = 'round';

    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  }

  //EventListeners
  canvas.addEventListener('mousedown', startPosition);
  canvas.addEventListener('mouseup', finishedPosition);
  canvas.addEventListener('mousemove', draw);
  

});

window.addEventListener('resize', () => {
  canvas.height = (window.innerHeight * 2) / 3;
  canvas.width = (window.innerWidth * 2) / 3;
})