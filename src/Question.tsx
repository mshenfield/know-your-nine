import * as React from 'react';
import { Component } from 'react';

import classNames from 'classnames';

import Quote from './types/Quote';

import './Question.css';

const THE_FELLOWSHIP = [
  'Aragorn',
  'Boromir',
  'Frodo',
  'Gandalf',
  'Gimli',
  'Merry',
  'Legolas',
  'Pippin',
  'Sam'
];

/* A select including the nine members of the fellowship of the ring

props are passed through to the select component.
*/
const FellowshipSelect = (props: any) => {
  return (
    <select className="FellowshipSelect" {...props}>
      <option value={FellowshipSelect.defaultValue} disabled hidden>
        Select a companion
      </option>
      {THE_FELLOWSHIP.map(companion => (
        <option key={companion} value={companion}>
          {companion}
        </option>
      ))}
    </select>
  );
};
FellowshipSelect.defaultValue = '';

export interface QuestionProps {
  answered: boolean;
  onAnswer: (isAnswerCorrect: boolean) => void;
  quote: Quote;
}

interface QuestionState {
  answer: string | null;
  speaker: string;
}

/* Quote display, answer selection, and answer display

There's a lot happening here. One surprising fact is that the caller must
specify whether the question displays as answered or not. It's not ideal,
but it allows resetting the question from above.
*/
class Question extends Component<QuestionProps, QuestionState> {
  onAnswerHook: (isAnswerCorrect: boolean) => void;

  constructor(props: QuestionProps) {
    super(props);
    this.onAnswerHook = props.onAnswer;
    this.state = {
      speaker: FellowshipSelect.defaultValue,
      answer: null
    };
  }

  speakerIsCorrect(): boolean {
    return this.state.answer === this.props.quote.speaker;
  }

  onAnswer = () => {
    const newState = {
      answer: this.state.speaker,
      speaker: FellowshipSelect.defaultValue
    };
    this.setState(
      newState,
      // Make sure to call the callback after state has changed
      () => this.onAnswerHook(this.speakerIsCorrect())
    );
  };

  setSpeaker = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ speaker: (event.target as HTMLInputElement).value });
  };

  render() {
    const quote = this.props.quote;

    const quoteImage = (
      <img alt={quote.text} className="Quote-image" src={quote.image} />
    );
    const speaker = <div className="Quote-speaker">{quote.speaker}</div>;
    const yourAnswer = (
      <div className="Question-yourAnswer">
        Your Answer: {this.state.answer}
      </div>
    );

    const resultText = (
      <div className="Question-result">
        {this.speakerIsCorrect() ? 'Correct' : 'Incorrect'}
      </div>
    );

    // Handy for conditionally rendering things whethere the question inspect
    // answered or unanswered
    const questionClassnames = classNames('Question', {
      'Question-answered': this.props.answered,
      'Question-unanswered': !this.props.answered
    });

    return (
      <div className={questionClassnames}>
        {quoteImage}
        <div className="Quote-text">{quote.text}</div>
        {speaker}
        {yourAnswer}
        {resultText}
        <FellowshipSelect
          disabled={this.props.answered}
          onChange={this.setSpeaker}
          value={this.state.speaker}
        />
        <button
          className="Question-submit"
          disabled={this.props.answered}
          onClick={this.onAnswer}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default Question;
