import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Statistics extends Component {
    countTotalFeedback = ({renderObject}) => 
        (Object.values(renderObject).reduce((acc, num) => acc + num, 0))
    
       
       countPositiveFeedbackPercentage = ({renderObject}) =>      
        (Math.round(renderObject['good']/(Object.values(renderObject).reduce((acc, num) => acc + num, 0))*100)) 

/*     countPositiveFeedbackPercentage = () =>      
      (Math.round(/()*100)) */


    render () {
      const stateElements = this.props.renderObject     
        
      const nameOfStatsticsItems = Object.keys(stateElements)
        return (<><h2>Statistics</h2>
        {nameOfStatsticsItems.map((item) =>
         (<p key={item}>{item}: {stateElements[`${item}`] }</p>)
        )}
        <p>Total: {this.countTotalFeedback(this.props)}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage(this.props)}%</p></>)
    }
}

Statistics.propTypes = {
    renderObject: PropTypes.object,
    
} 

export default Statistics

