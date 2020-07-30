import * as React from "react";
import {Subtract} from "utility-types";

import history from "@app/history";

import {IWithActiveTabHOCInjectProps} from "./interface";


const withActiveTab = (Component) => {
  type TComponentProps = React.ComponentProps<typeof Component>;
  type THOC = Subtract<TComponentProps, IWithActiveTabHOCInjectProps>;

  const WithActiveTab: React.FunctionComponent<THOC> = (props: THOC) => {
    const {location, activeTab} = props;
    return <Component
      {...props}
      activeTab={decodeURIComponent(location.hash.replace(`#`, ``)) || activeTab}
      onActiveTabChange={(tab) => history.push(`#${tab}`)}
    />;
  };

  return WithActiveTab;
};

export default withActiveTab;
