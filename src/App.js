import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="app-title">
          Hi! I'm glad you came by.
        </p>
        <p className="app-desc">
          My name is João and I like to develop things.
        </p>
      </header>
    </div>
  );
}

export default App;
