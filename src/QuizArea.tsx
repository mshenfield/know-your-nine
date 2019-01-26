/* The quiz card and navigation */
import * as React from 'react';
import { Component } from 'react';

import Question from './Question';
import QuizScore from './QuizScore';

import quotes from './base-quotes';

export interface QuizNavigationProps {
  isCurrentQuestionAnswered: boolean;
  onClickNext: (event: React.MouseEvent<HTMLButtonElement>) => any;
}

const QuizNavigation = (props: QuizNavigationProps) => {
  if (!props.isCurrentQuestionAnswered) {
    return null;
  }

  return (
    <div className="QuizNavigation">
      <button onClick={props.onClickNext}>Next</button>
    </div>
  );
};

export interface QuizAreaProps {}

interface QuizAreaState {
  answered: number;
  correct: number;
  isCurrentQuestionAnswered: boolean;
  quoteIndex: number;
}

class QuizArea extends Component<QuizAreaProps, QuizAreaState> {
  state: QuizAreaState = {
    answered: 0,
    correct: 0,
    isCurrentQuestionAnswered: false,
    quoteIndex: 0
  };

  onAnswer = (answeredCorrectly: boolean) => {
    this.setState(state => ({
      answered: state.answered + 1,
      correct: answeredCorrectly ? state.correct + 1 : state.correct,
      isCurrentQuestionAnswered: true
    }));
  };

  gotoNextQuestion = () => {
    this.setState(state => {
      return {
        quoteIndex: state.quoteIndex + 1,
        isCurrentQuestionAnswered: false
      };
    });
  };

  render() {
    const quote = quotes[this.state.quoteIndex];

    const navigation =
      this.state.answered === quotes.length ? (
        "Congratulations! You're done."
      ) : (
        <QuizNavigation
          isCurrentQuestionAnswered={this.state.isCurrentQuestionAnswered}
          onClickNext={this.gotoNextQuestion}
        />
      );

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
        {navigation}
      </div>
    );
  }
}

export default QuizArea;
