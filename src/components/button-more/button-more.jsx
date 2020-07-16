import React from "react";
import PropTypes from "prop-types";


const ButtonMore = (props) => {
  const {hide, children, onButtonClick} = props;

  if (hide) {
    return null;
  }
  return <div className="catalog__more">
    <button
      className="catalog__button"
      type="button"
      onClick={onButtonClick}
    >
      {children}
    </button>
  </div>;
};

ButtonMore.defaultProps = {
  hide: false,
};

ButtonMore.propTypes = {
  hide: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default ButtonMore;