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

  onButtonPress = (e) => {  
    const name = e.target.innerHTML;   
      this.setState((prevState) => ({
        [name]: prevState[name] + 1       
      }))    
     } 

  render () {
    const stateArray = this.state; 
   
    return (      
     <div> 
       <Section title="Please leave feedback">
        
        <FeedbackOptions 
          options={Object.keys(stateArray)} 
          onLeaveFeedback={this.onButtonPress}>            
          </FeedbackOptions>
          {(Object.values(stateArray).reduce((acc, num) => acc + num, 0) > 0) ?
          <Statistics 
          renderObject={stateArray} /> :
          <Notification message="There is no feedback" />} 
  
        </Section>
      </div>
    )
  }
}



export default App;