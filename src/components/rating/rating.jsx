import React, {Fragment} from "react";
import PropTypes from "prop-types";


const Rating = (props) => {
  const {starCount, value, name, onChange, required} = props;

  return <div className="rating">
    <div className="rating__stars">
      {new Array(starCount).fill(``).map((star, index) => {
        const inputValue = `${index + 1}`;
        return <Fragment key={index}>
          <input
            className="rating__input"
            id={`star-${inputValue}`}
            type="radio"
            name={name}
            value={inputValue}
            onChange={() => onChange(inputValue)}
            checked={value === inputValue}
            required={required}
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
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

export default Rating;
