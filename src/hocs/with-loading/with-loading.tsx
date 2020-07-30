import * as React from "react";

import {IWithLoadingHOCProps} from "./interface";


const withLoading = (Component) => {
  type TComponent = React.ComponentProps<typeof Component>;

  const WithLoading: React.FunctionComponent<TComponent> = (props: IWithLoadingHOCProps) => {
    const {loadingParams} = props;
    const isLoading = loadingParams.some((paramKey) => props[paramKey] === null || props[paramKey] === undefined);
    return isLoading ? null : <Component {...props}/>;
  };

  return WithLoading;
};

export default withLoading;
