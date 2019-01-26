import * as React from 'react';

import classNames from 'classnames';

import './QuizScore.css';

export interface QuizScoreProps {
  answered: number;
  correct: number;
}
const QuizScore = (props: QuizScoreProps) => {
  let scoreQualityClass: string;
  // Default to good if there haven't been any answers yet
  if (props.answered === 0) {
    scoreQualityClass = 'QuizScore-good';
  } else {
    const ratio = props.correct / props.answered;

    if (ratio < 0.33) {
      scoreQualityClass = 'QuizScore-bad';
    } else if (ratio < 0.75) {
      scoreQualityClass = 'QuizScore-medium';
    } else {
      scoreQualityClass = 'QuizScore-good';
    }
  }
  return (
    <div className={classNames('QuizScore', scoreQualityClass)}>
      {props.correct}/{props.answered}
    </div>
  );
};

export default QuizScore;
