import * as React from "react";

import {IWithLoadingHOCProps} from "./interface";
import {Subtract} from "utility-types";


const withLoading = (Component) => {
  type TComponent = React.ComponentProps<typeof Component>;
  type THOC = Subtract<IWithLoadingHOCProps, TComponent>;

  const WithLoading: React.FunctionComponent<THOC> = (props: IWithLoadingHOCProps) => {
    const {loadingParams} = props;
    const isLoading = loadingParams.some((paramKey) => props[paramKey] === null || props[paramKey] === undefined);
    return isLoading ? null : <Component {...props}/>;
  };

  return WithLoading;
};

export default withLoading;
