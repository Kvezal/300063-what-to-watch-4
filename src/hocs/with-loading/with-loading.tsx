import * as React from "react";

interface IProps {
  loadingParams: string[];
}

const withLoading = (Component) => {
  type TComponent = React.ComponentProps<typeof Component>;
  type T = IProps & TComponent;

  const WithLoading: React.FunctionComponent<T> = (props) => {
    const {loadingParams} = props;
    const isLoading = loadingParams.some((paramKey) => props[paramKey] === null || props[paramKey] === undefined);
    return isLoading ? null : <Component {...props}/>;
  };

  return WithLoading;
};

export default withLoading;
