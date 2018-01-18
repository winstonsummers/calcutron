import React, { Component } from 'react';
import Calculator from './Calculator.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Master of the dramatic</h1>
          <p>and math when ocassion calls</p>
        </header>
        <Calculator />
        <footer>
          <p>PAUSE!</p>
        </footer>
      </div>
    );
  }
}

export default App;
