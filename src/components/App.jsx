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
    const name = e.target.innerHTML;   
      this.setState((prevState) => ({
        [name]: prevState[name] + 1       
      }))    
     }

  render () {
    const {good, neutral, bad} = this.state; 
     
    return (      
     <div> 
       <Section title="Please leave feedback">
        
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
        </Section>
      </div>
    )
  }
}



export default App;