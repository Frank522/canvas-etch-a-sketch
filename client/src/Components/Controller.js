import React, { Component } from 'react';

const Controller = () => {
  return (
    <div id="controller">
      <div id="editBtns">
        Edit Buttons
        <input type="button" value="reset" id="resetBtn" />
        <input type="button" value="undo" id="undoBtn" />
        <input type="button" value="redo" id="redoBtn" />
      </div>
      <div id="drawBtns">
        Draw Buttons
        <input type="button" value="line" id="lineBtn" />
              <input type="button" value="stroke" id="strokeBtn" />
              <input type="button" value="rectangle" id="rectangleBtn" />
              <input type="button" value="square" id="sqaureBtn" />
              <input type="button" value="circle" id="circleBtn" />              
      </div>
    </div>
  );
};

export default Controller;
