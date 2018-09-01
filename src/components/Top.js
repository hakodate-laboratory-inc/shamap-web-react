import React, { Component } from 'react';
import './Top.css';

class Top extends Component {
  render() {
    return (
      <div className="Top">
        <header className="Top-header">
          <h1 className="Top-title">ShaMAP</h1>
          <p>Share your Map ;)</p>
        </header>
        <p className="Top-intro">
          このサイトはβ版です。不具合報告は<a href="https://twitter.com/_leo_isaac" target="_blank" rel="noopener noreferrer">Isaac</a>へ。
        </p>
      </div>
    );
  }
}

export default Top;
