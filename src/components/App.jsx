import React, { Component } from 'react';
import Statistics from 'components/Statistics/Statistics'
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions'
import Section from 'components/Section/Section'
import Notification from 'components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback = ({good,neutral,bad}) => (good+neutral+bad)

  countPositiveFeedbackPercentage = ({good,neutral,bad}) =>      
    (Math.round(good/(good+neutral+bad)*100))

  onButtonPress = (e) => {  
    if (e.target.textContent === 'good') {
      this.setState((prevState) => ({
       good: prevState.good + 1       
      }))          
    } else if (e.target.textContent === 'neutral') {
      this.setState((prevState) => ({
        neutral: prevState.neutral + 1       
       }))     
    } else if (e.target.textContent === 'bad') {
      this.setState((prevState) => ({
        bad: prevState.bad + 1       
       }))     
    }
  }
 

  render () {
    const {good, neutral, bad} = this.state; 
     
    return (      
     <div> 
       <Section title="Please leave feedback"></Section>
        
        <FeedbackOptions 
          options={Object.keys({good, neutral, bad})} 
          onLeaveFeedback={this.onButtonPress}>            
          </FeedbackOptions>
        {((good+neutral+bad) > 0) ? 
        <Statistics 
          good={good} 
          neutral={neutral} 
          bad={bad} 
          total={this.countTotalFeedback(this.state)} 
          positivePercentage={this.countPositiveFeedbackPercentage(this.state)} >
        </Statistics> : 
        <Notification message="There is no feedback" /> }
      </div>
    )
  }
}



export default App;