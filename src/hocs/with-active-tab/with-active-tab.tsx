import * as React from "react";

import history from "@app/history";
import {Subtract} from "utility-types";


interface IInjectProps {
  activeTab: string;
  onActiveTabChange: (tab: string) => void;
}

const withActiveTab = (Component) => {
  type TComponentProps = React.ComponentProps<typeof Component>;
  type T = Subtract<TComponentProps, IInjectProps>;

  const WithActiveTab: React.FunctionComponent<T> = (props) => {
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
