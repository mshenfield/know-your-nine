import * as React from 'react';
import { Component } from 'react';

import QuizArea from './QuizArea';

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
          <p>A Lord of the Rings™ quiz</p>
          <QuizArea />
        </main>
      </div>
    );
  }
}

export default App;
