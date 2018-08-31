import React, { Component } from 'react';
import logo from '../img/logo.svg';
import './Top.css';

class Top extends Component {
  render() {
    return (
      <div className="Top">
        <header className="Top-header">
          <img src={logo} className="Top-logo" alt="logo" />
          <h1 className="Top-title">Welcome to React</h1>
        </header>
        <p className="Top-intro">
          To get started, edit <code>src/Top.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Top;
