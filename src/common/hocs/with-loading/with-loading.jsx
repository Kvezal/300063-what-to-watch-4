import React from "react";


const withLoading = (Component, importantParams) => (props) => {
  const isLoading = importantParams.some((paramKey) => props[paramKey] === null || props[paramKey] === undefined);
  return isLoading ? null : <Component {...props}/>;
};

export default withLoading;
