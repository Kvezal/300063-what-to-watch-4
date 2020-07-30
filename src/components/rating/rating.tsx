import * as React from "react";

import {IRatingProps} from "./interface";


const Rating: React.FC<IRatingProps> = (props: IRatingProps) => {
  const {starCount, value, name, onChange, required} = props;

  return <div className="rating">
    <div className="rating__stars">
      {new Array(starCount).fill(``).map((star, index) => {
        const inputValue = `${index + 1}`;
        return <React.Fragment key={index}>
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
        </React.Fragment>;
      })}
    </div>
  </div>;
};

Rating.defaultProps = {
  starCount: 5,
};

export default Rating;
