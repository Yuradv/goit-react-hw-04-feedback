import Container from './Container'
import React, { Component } from "react";
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section/Section'
import Notification from 'components/Notification';



class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

 onHandleIncrement = e => {
    this.setState(prevState => {
      return { [e.target.name]: (prevState[e.target.name] += 1) };
    });
  };
 
  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state
    let total = good + neutral + bad
    return total
  }

  countPositiveFeedbackPercentage = () => {
    const {good} = this.state
    const positiveNumber = Math.round(
      (good * 100 / this.countTotalFeedback())
    );
    return positiveNumber;
  }

  
  render() {
     const {good, neutral, bad} = this.state

    return (
      <Container>
        <Section
        title='Please leave feedback'>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onHandleIncrement}
          />
        </Section>
        <Section
        title='Statistics'>
        {this.countTotalFeedback() ? (
            <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
          />
          ) : (
              <Notification
              message='There is no feedback'/>
          )}
          </Section>
    </Container>
  )
}
}


export default App;


