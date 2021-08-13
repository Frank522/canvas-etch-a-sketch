import React, { Component } from 'react';

const Controller = () => {
  return (
    <div>
      <input type="button" value="reset" id="resetBtn" />
      <input type="button" value="undo" id="undoBtn" />
      <input type="button" value="redo" id="redoBtn" />
    </div>
  );
};

export default Controller;
