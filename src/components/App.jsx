import Container from './Container'
import { useState } from "react";
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section/Section'
import Notification from 'components/Notification';



export default function App()   {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const onHandleUpdate = (e) => {
    const name = e.target.name

    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    let total = good + neutral + bad;
    return total  
  }

  const countPositiveFeedbackPercentage = () => {
    const positiveNumber = Math.round(
      (good * 100 / countTotalFeedback())
    );
    return positiveNumber;
  }

    return (
      <Container>
        <Section
        title='Please leave your feedback'>
        <FeedbackOptions
          options={['good','neutral','bad']}
          onLeaveFeedback={onHandleUpdate}
          />
        </Section>

        <Section
        title='Statistics'>
        {countTotalFeedback() ? (
            <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
          />
          ) : (
              <Notification
              message='There is no feedback'/>
          )}
          </Section>
    </Container>
  )

}





