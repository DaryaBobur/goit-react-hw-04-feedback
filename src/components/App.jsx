import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const App = () => {
 
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const btnFeedback = ['good', 'bad', 'neutral'];

  const leaveFeedback = (btnName) => {

    switch(btnName) {
      case "good" :
        return setGood(prevState => prevState + 1);
      
      case "neutral":
        return setNeutral(prevState => prevState + 1);

      case "bad":
        return setBad(prevState => prevState + 1);

      default:
        return;
    }
  
  }

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    return Math.round(good * 100 / total);
  }

  return (
    <div>

      <Section title="Please leave feedback">

        <FeedbackOptions 
          options={btnFeedback} 
          onLeaveFeedback={leaveFeedback}
        />

      </Section>

      <Section title="Statistics">
        {!countTotalFeedback ?  
          <Notification 
            message="There is no feedback!" 
          /> 
          : 
          <Statistics 
            good={good} 
            neutral={neutral} 
            bad={bad} 
            total={countTotalFeedback()} 
            positivePercentage={countPositiveFeedbackPercentage()} 
          />
        }

      </Section>
  
    </div>
  )
};

export default App;