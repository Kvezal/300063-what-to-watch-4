import React, {Fragment} from "react";
import PropTypes from "prop-types";


const Rating = (props) => {
  const {starCount, value, onChange} = props;

  return <div className="rating">
    <div className="rating__stars">
      {new Array(starCount).fill(``).map((star, index) => {
        const inputValue = `${index + 1}`;
        return <Fragment key={index}>
          <input
            className="rating__input"
            id={`star-${inputValue}`}
            type="radio"
            name="rating"
            value={inputValue}
            onChange={() => onChange(inputValue)}
            checked={value === inputValue}
          />
          <label className="rating__label" htmlFor={`star-${inputValue}`}/>
        </Fragment>;
      })}
    </div>
  </div>;
};

Rating.defaultProps = {
  starCount: 5,
};

Rating.propTypes = {
  starCount: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Rating;
