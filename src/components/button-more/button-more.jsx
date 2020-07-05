import React, {Fragment} from "react";
import PropTypes from "prop-types";


const ButtonMore = (props) => {
  const {hide, children, onButtonClick} = props;

  if (hide) {
    return <Fragment/>;
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
  children: PropTypes.node.isRequired,
};

export default ButtonMore;
