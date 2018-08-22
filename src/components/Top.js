import React, { Component } from 'react';
import logo from '../img/logo.svg';
import './Top.css';

class Top extends Component {
  render() {
    return (
      <div className="Top">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Top;
