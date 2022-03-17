

const FeedbackOptions = ({options, onLeaveFeedback}) => (
    options.map((name) => (
        <button key={name} type="button" onClick={onLeaveFeedback} >{name}</button>
      ))
   )


export default FeedbackOptions