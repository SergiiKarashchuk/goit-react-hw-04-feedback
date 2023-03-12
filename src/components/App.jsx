import { useState } from 'react';
import { FeedbackOptions } from 'components/FeedbackReviews';
import { Statistics } from 'components/Statistics';
import { Section } from 'components/Section';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['Good', 'Neutral', 'Bad'];
  const totalFeedback = good + neutral + bad;

  function onLeaveFeedback(e) {
    switch (e.target.textContent) {
      case 'Good':
        setGood(prevValue => prevValue + 1);
        break;
      case 'Neutral':
        setNeutral(prevValue => prevValue + 1);
        break;
      case 'Bad':
        setBad(prevValue => prevValue + 1);
        break;
      default:
        return;
    }
  }

  function countPositiveFeedback() {
    if (totalFeedback === 0) return 0;
    const positivFeedback = (good / totalFeedback) * 100;
    return Math.round(positivFeedback);
  }

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={totalFeedback}
        positivePercent={countPositiveFeedback()}
      />
    </Section>
  );
}
