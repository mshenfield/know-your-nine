import React, { Component } from 'react';

import forFrodo from './images/for-frodo.gif';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          Know Your Nine{' '}
          <span aria-label="A ring and a sword." role="img">
            💍🗡
          </span>
        </h1>
        <main>
          <p>A Lord of the Rings™ quiz, coming soon</p>
          <img
            alt="Aragorn fighting against the odds for his friend, Frodo of the Shire."
            src={forFrodo}
          />
        </main>
      </div>
    );
  }
}

export default App;
