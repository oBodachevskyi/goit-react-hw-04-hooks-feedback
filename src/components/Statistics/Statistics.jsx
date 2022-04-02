import PropTypes from 'prop-types';

export default function Statistics (props) {

        const countTotalFeedback = ({renderObject}) =>
        (Object.values(renderObject).reduce((acc, num) => acc + num, 0))

        const countPositiveFeedbackPercentage = ({renderObject}) =>
        (Math.round(renderObject['Good']/(Object.values(renderObject).reduce((acc, num) => acc + num, 0))*100))

    return (<><h2>Statistics</h2>
        {Object.keys(props.renderObject).map((item) =>
        (<p key={item}>{item}: {props.renderObject[`${item}`] }</p>)
        )}
        <p>Total: {countTotalFeedback(props)}</p>
        <p>Positive feedback: {countPositiveFeedbackPercentage(props)}%</p></>)
}

Statistics.propTypes = { 
    renderObject: PropTypes.object,
}