import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';
import shortid from 'shortid';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(element => {
        return (
          <button
            key={shortid.generate()}
            name={element}
            className={s.button}
            onClick={onLeaveFeedback}
          >
            {element}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
