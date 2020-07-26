import React from "react";
import PropTypes from "prop-types";


const withLoading = (Component) => {
  const WithLoading = (props) => {
    const {loadingParams} = props;
    const isLoading = loadingParams.some((paramKey) => props[paramKey] === null || props[paramKey] === undefined);
    return isLoading ? null : <Component {...props}/>;
  };

  WithLoading.propTypes = {
    loadingParams: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  return WithLoading;
};

export default withLoading;
