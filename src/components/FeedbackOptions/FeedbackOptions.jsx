import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/FeedbackOptions/FeedbackOptions.module.css'

const FeedbackOptions = ({options, onLeaveFeedback}) => (
    options.map((name) => (
        <button 
        key={name} 
        type="button" 
        onClick={onLeaveFeedback} 
        className={css.feedback__button}
        >{name}</button>
      ))
   )

FeedbackOptions.propTypes = {
    options:PropTypes.array,
    onLeaveFeedback: PropTypes.func,
  } 


export default FeedbackOptions