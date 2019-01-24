/* The quiz card and navigation */
import React, { Component } from 'react';

import Question from './Question.js';
import QuizScore from './QuizScore.js';

import quotes from './base-quotes.js';

const QuizNavigation = props => {
  if (!props.isCurrentQuestionAnswered) {
    return false;
  }

  return (
    <div className="QuizNavigation">
      <button onClick={props.onClickNext}>Next</button>
    </div>
  );
};

class QuizArea extends Component {
  state = {
    answered: 0,
    correct: 0,
    isCurrentQuestionAnswered: false,
    quoteIndex: 0
  };

  onAnswer = answeredCorrectly => {
    this.setState((state, props) => ({
      answered: state.answered + 1,
      correct: answeredCorrectly ? state.correct + 1 : state.correct,
      isCurrentQuestionAnswered: true
    }));
  };

  gotoNextQuestion = () => {
    this.setState((state, props) => {
      return {
        quoteIndex: this.state.quoteIndex + 1,
        isCurrentQuestionAnswered: false
      };
    });
  };

  render() {
    const quote = quotes[this.state.quoteIndex];

    const done = this.state.answered === quotes.length;

    if (done) {
      return (
        <div className="QuizArea">
          <QuizScore
            correct={this.state.correct}
            answered={this.state.answered}
          />
          Congratulations! You're done.
        </div>
      );
    }

    return (
      <div className="QuizArea">
        <QuizScore
          correct={this.state.correct}
          answered={this.state.answered}
        />
        <Question
          answered={this.state.isCurrentQuestionAnswered}
          quote={quote}
          onAnswer={this.onAnswer}
        />
        <QuizNavigation
          isCurrentQuestionAnswered={this.state.isCurrentQuestionAnswered}
          onClickNext={this.gotoNextQuestion}
        />
      </div>
    );
  }
}

export default QuizArea;
