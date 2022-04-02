import { useState } from 'react';
import Statistics from 'components/Statistics/Statistics'
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions'
import Section from 'components/Section/Section'
import Notification from 'components/Notification/Notification';


export default function App () {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

 
  const stateArray = {
    Good: good,
    Neutral: neutral,
    Bad: bad,
  }

  const onButtonPress = (e) => {  
      switch(e.target.textContent.toLowerCase()) {
        case 'good':
          setGood(good + 1)
          break;

          case 'neutral':
            setNeutral(neutral + 1)
            break;

            case 'bad':
              setBad(bad + 1)
              break;

              default:
        return;
      }} 
  
  return (      
    <div> 
      <Section title="Please leave feedback">
       
       <FeedbackOptions 
         options={Object.keys(stateArray)} 
         onLeaveFeedback={onButtonPress}>            
         </FeedbackOptions>
         {(Object.values(stateArray).reduce((acc, num) => acc + num, 0) > 0) ?
         <Statistics 
         renderObject={stateArray} /> :
         <Notification message="There is no feedback" />} 
 
       </Section>
     </div>
   )
}
